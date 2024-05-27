import './style.css'
import { Project } from './modules.js';

// improve: better input, 
// cross things off the list and tasks remaining
// sort by time and priority
// save to local storage/databse, implement log in system
class Interface {
    constructor(){
        this.projects = []
        this.currProjectIndex = 0
    }
    addProject(name){
        this.projects.push(new Project(name))
        this.currProjectIndex = this.projects.length-1
        this.projectDisplay();
    }
    addTodo(name,p,date){
        this.projects[this.currProjectIndex].addTodo(name,p,date)
        this.projectDisplay();
    }
    projectDisplay() {
        const list = document.getElementById("project-list");
        list.innerHTML = ''; 
        this.projects.forEach((project, index) => {
            const projectItem = document.createElement('li');
            projectItem.textContent = project.name;
            projectItem.className = 'project-item';
            projectItem.onclick = () => {
                this.currProjectIndex = index;
                const otherItems = document.querySelectorAll('.project-item')
                otherItems.forEach((item)=>{item.style.opacity = 1})
                projectItem.style.opacity = 0.5;
                todoDisplay(index); 
            };
            list.appendChild(projectItem);
            if(index === this.currProjectIndex){
                todoDisplay(index); 
            }
        });
    }
}

function todoDisplay(projectIndex) {
    const list = document.getElementById("todo-list");
    list.innerHTML = '';

    it.projects[projectIndex].todos.forEach((todo, todoIndex) => {
        const todoElement = document.createElement('div');
        todoElement.className = 'todo-item';
        todoElement.innerHTML = `
            <div class="item-name">${todo.name}</div>
            <div class="priority">
                <span class="bar low"></span>
                <span class="bar mid"></span>
                <span class="bar high"></span>
            </div>
            <div class="item-date">${todo.date}</div>
            <div class="delete-btn" id="del${todoIndex}">🗑️</div>
        `;
        list.appendChild(todoElement);

        const bar = todoElement.querySelector(`.bar.${todo.priority}`);
        if (bar) {
            bar.style.opacity = 1;
        }

        const deleteBtn = todoElement.querySelector('.delete-btn');
        deleteBtn.onclick = () => {
            it.projects[projectIndex].deleteTodo(todoIndex); 
            todoDisplay(projectIndex); 
        };
    });
}

const it = new Interface()

var modal = document.getElementById('modal');
var addButton = document.getElementById('add-button');
addButton.onclick = function() {
    modal.style.display = "block";
}

var closeButton = document.getElementsByClassName('close-button')[0];
closeButton.onclick = function() {
    modal.style.display = "none";
}

var form = document.getElementById('addForm')
form.addEventListener('submit',function(event) {
    event.preventDefault(); 
    const itemType = document.querySelector('input[name="itemType"]:checked').value;
    const itemName = document.getElementById('itemName').value;
    const priority = document.getElementById('priority').value;
    const date = document.getElementById('date').value;
    
    if (itemType === 'project'){
        it.addProject(itemName)
    } else {
        it.addTodo(itemName,priority,date)
    }
    document.getElementById('modal').style.display = "none";
})

it.addProject('Demo Project')
it.addTodo('Water my cactus','high','2024-5-1')
it.addTodo('Make meatloaf and salmon','mid','2024-5-12')
it.addTodo('Buy sunflower seeds and do gardening','low','2024-5-24')