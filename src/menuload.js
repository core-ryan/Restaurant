import purple from './img/purple.jpg';
import pal from './img/paloma.jpg';
import mwn from './img/negroni.jpg';

function menuload(){
    const contentElement = document.getElementById("content");

    const pageTitle = document.createElement("div");
    pageTitle.className = "title-card";
    const title = document.createElement("p");
    title.innerHTML = "Menu";
    pageTitle.appendChild(title);
    contentElement.appendChild(pageTitle);

    const drinkTitle = document.createElement("div");
    drinkTitle.className = "subtitle-card";
    const drinkText = document.createElement("p");
    drinkText.innerHTML = "Drinks";
    drinkTitle.appendChild(drinkText);
    contentElement.appendChild(drinkTitle);

    const contentCardOne = document.createElement("div");
    contentCardOne.className = "content-card";
    const theJuice = document.createElement("h3");
    theJuice.innerHTML = "The Juice - House Special";
    const theJuice_summary = document.createElement("p");
    theJuice_summary.innerHTML = "Blend of blackberry juice, blueberry juice, raspberry liquer, and vodka";
    const purpleDrink = new Image();
    purpleDrink.src = purple;
    contentCardOne.appendChild(theJuice);
    contentCardOne.appendChild(theJuice_summary);
    contentCardOne.appendChild(purpleDrink);
    contentElement.appendChild(contentCardOne);

    const contentCardTwo = document.createElement("div");
    contentCardTwo.className ="content-card";
    const paloma = document.createElement("h3");
    paloma.innerHTML = "Palmetto Paloma";
    const paloma_summary = document.createElement("p");
    paloma_summary.innerHTML = "Refreshing mix of grapefruit juice, soda water, lime juice, and house Tequila";
    const paloma_pic = new Image ();
    paloma_pic.src = pal;
    contentCardTwo.appendChild(paloma);
    contentCardTwo.appendChild(paloma_summary);
    contentCardTwo.appendChild(paloma_pic);
    contentElement.appendChild(contentCardTwo);

    const contentCardThree = document.createElement("div");
    contentCardThree.className ="content-card";
    const negroni = document.createElement("h3");
    negroni.innerHTML = "Mulled Wine Negroni";
    const negroni_summary = document.createElement("p");
    negroni_summary.innerHTML = "Mulled wine, Campari, Vermouth, and Gin served chilled on the rocks";
    const negroni_pic = new Image ();
    negroni_pic.src = mwn;
    contentCardThree.appendChild(negroni);
    contentCardThree.appendChild(negroni_summary);
    contentCardThree.appendChild(negroni_pic);
    contentElement.appendChild(contentCardThree);

}

export default menuload;