import _ from 'lodash';
import './style.css';
import Cornfield from './cornfield.png';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myImage = new Image();
    myImage.src = Cornfield;
    element.appendChild(myImage);
    
    return element;
}

document.body.appendChild(component());