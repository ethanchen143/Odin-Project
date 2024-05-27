let myLibrary = [ { author: 'J.K. Rowling', title: 'Harry Potter', pages: 500, read: true },
{ author: 'George Orwell', title: '1984', pages: 328, read: false }];

class Book {
    constructor(author,title,pages,read){
        this.author = author
        this.title = title
        this.pages = pages
        this.read = read
    }
}

function display(){
    const lib = document.getElementById('display')
    lib.innerHTML='<table><tr><th>Author</th><th>Title</th><th>Pages</th><th>Read?</th></tr></table>'
    const tb = document.querySelector('table')
    myLibrary.forEach((book) => {
        const row = document.createElement('tr');
    
        const author = document.createElement('td');
        author.textContent = book.author;
        row.appendChild(author);
    
        const title = document.createElement('td');
        title.textContent = book.title;
        row.appendChild(title);
    
        const pages = document.createElement('td');
        pages.textContent = book.pages;
        row.appendChild(pages);
    
        const read = document.createElement('td');
        read.textContent = book.read ? 'Yes' : 'No';
        row.appendChild(read);
    
        tb.appendChild(row);
    });
}

function addBookToLibrary(author, title, pages, read) {
    const nb = new Book(author,title,pages,read)
    myLibrary.push(nb)
    display()
}

document.addEventListener('DOMContentLoaded',display)

const btn = document.createElement('button')
btn.textContent = 'Add to Library'
btn.type = 'submit'
btn.addEventListener('click',handleClick,false)
function handleClick(event){
    const form = document.getElementById('bookForm');
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    addBookToLibrary(author, title, pages, read)
    form.reset();
    event.preventDefault();
}
document.body.appendChild(btn)

const rmv = document.createElement('button')
rmv.textContent = 'Remove'
rmv.addEventListener('click',()=>{
    myLibrary = []
    display()
})
document.body.appendChild(rmv)