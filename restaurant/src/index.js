//Todo: Frontend Design

//Todo: Modularize each page and create classes for food items.

function renderHome(){
    content.innerHTML = ''
    const hl = document.createElement('p')
    hl.textContent = 'this is the home page. you\' are about to eat some good food'
    content.appendChild(hl)
}

function renderMenu(){
    content.innerHTML = ''
    const hl = document.createElement('p')
    hl.textContent = 'this is the menu page. check out these delicious dishes we offer'
    content.appendChild(hl)
}

function renderAbout(){
    content.innerHTML = ''
    const hl = document.createElement('p')
    hl.textContent = 'this is the about page. learn about who we are'
    content.appendChild(hl)
}

const content = document.getElementById('content')

const home = document.getElementById('home')
home.addEventListener('click',renderHome)

const menu = document.getElementById('menu')
menu.addEventListener('click',renderMenu)

const about = document.getElementById('about')
about.addEventListener('click',renderAbout)