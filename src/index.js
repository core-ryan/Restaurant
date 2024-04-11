import './styles.css';

const contentElement = document.getElementById("content");
const para = document.createElement("p");
para.innerHTML = "Paragraph";
contentElement.appendChild(para);
