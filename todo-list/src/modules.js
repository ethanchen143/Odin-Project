export class Project{
    constructor(name){
        this.name = name
        this.todos = []
        this.num = 0
    }
    addTodo(name,priority,date) {
        this.todos.push(new Todo(name,priority,date))
        this.num += 1
    }
    deleteTodo(index){
        this.todos.splice(index,1)
        this.num -= 1
    }
}

export class Todo{
    constructor(name,priority,date){
        this.name = name
        this.priority = priority
        this.date = date
    }
}