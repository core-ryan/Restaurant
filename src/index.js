import './styles.css';
import homeload from './homeload.js';
import menuload from './menuload.js';
import aboutload from './aboutload.js';


// Gets main content div
const contentElement = document.getElementById("content");

// Initialize page with "Home" contents
homeload();

// For each nav button click, clear the content div, add corresponding page content
document.getElementById("home-button").addEventListener("click",function(){
    contentElement.replaceChildren();
    homeload();
});

document.getElementById("menu-button").addEventListener("click",function(){
    contentElement.replaceChildren();
    menuload();
});

document.getElementById("about-button").addEventListener("click",function(){
    contentElement.replaceChildren();
    aboutload();
});