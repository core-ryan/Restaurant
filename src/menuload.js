import purple from './img/purple.jpg';
import pal from './img/paloma.jpg';
import mwn from './img/negroni.jpg';
import piz from './img/pizza.jpg';
import chick from './img/chicken.jpg';
import barbeque from './img/bbq.jpg';

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
    const price1 = document.createElement("h3");
    price1.innerHTML = "8";
    const purpleDrink = new Image();
    purpleDrink.src = purple;
    contentCardOne.appendChild(theJuice);
    contentCardOne.appendChild(theJuice_summary);
    contentCardOne.appendChild(price1);
    contentCardOne.appendChild(purpleDrink);
    contentElement.appendChild(contentCardOne);

    const contentCardTwo = document.createElement("div");
    contentCardTwo.className ="content-card";
    const paloma = document.createElement("h3");
    paloma.innerHTML = "Palmetto Paloma";
    const paloma_summary = document.createElement("p");
    paloma_summary.innerHTML = "Refreshing mix of grapefruit juice, soda water, lime juice, and house Tequila";
    const price2 = document.createElement("h3");
    price2.innerHTML = "11";
    const paloma_pic = new Image ();
    paloma_pic.src = pal;
    contentCardTwo.appendChild(paloma);
    contentCardTwo.appendChild(paloma_summary);
    contentCardTwo.appendChild(price2);
    contentCardTwo.appendChild(paloma_pic);
    contentElement.appendChild(contentCardTwo);

    const contentCardThree = document.createElement("div");
    contentCardThree.className ="content-card";
    const negroni = document.createElement("h3");
    negroni.innerHTML = "Mulled Wine Negroni";
    const negroni_summary = document.createElement("p");
    negroni_summary.innerHTML = "Mulled wine, Campari, Vermouth, and Gin served chilled on the rocks";
    const price3 = document.createElement("h3");
    price3.innerHTML = "13";
    const negroni_pic = new Image ();
    negroni_pic.src = mwn;
    contentCardThree.appendChild(negroni);
    contentCardThree.appendChild(negroni_summary);
    contentCardThree.appendChild(price3);
    contentCardThree.appendChild(negroni_pic);
    contentElement.appendChild(contentCardThree);

    const foodTitle = document.createElement("div");
    foodTitle.className = "subtitle-card";
    const foodText = document.createElement("p");
    foodText.innerHTML = "Food";
    foodTitle.appendChild(foodText);
    contentElement.appendChild(foodTitle);

    const contentCardFour = document.createElement("div");
    contentCardFour.className ="content-card";
    const pizza = document.createElement("h3");
    pizza.innerHTML = "Pizza Napoletana";
    const pizza_summary = document.createElement("p");
    pizza_summary.innerHTML = '12" neapolitan pizza served fresh out of our state-of-the-art wood-fire oven';
    const price4 = document.createElement("h3");
    price4.innerHTML = "18";
    const pizza_pic = new Image ();
    pizza_pic.src = piz;
    contentCardFour.appendChild(pizza);
    contentCardFour.appendChild(pizza_summary);
    contentCardFour.appendChild(price4);
    contentCardFour.appendChild(pizza_pic);
    contentElement.appendChild(contentCardFour);

    const contentCardFive = document.createElement("div");
    contentCardFive.className ="content-card";
    const chicken = document.createElement("h3");
    chicken.innerHTML = "Fried Chicken Sandwich";
    const chicken_summary = document.createElement("p");
    chicken_summary.innerHTML = "Fried chicken, coleslaw, pepperjack cheese, pickles, and house sauce served on a brioche bun with fries";
    const price5 = document.createElement("h3");
    price5.innerHTML = "15";
    const chicken_pic = new Image ();
    chicken_pic.src = chick;
    contentCardFive.appendChild(chicken);
    contentCardFive.appendChild(chicken_summary);
    contentCardFive.appendChild(price5);
    contentCardFive.appendChild(chicken_pic);
    contentElement.appendChild(contentCardFive);

    const contentCardSix = document.createElement("div");
    contentCardSix.className ="content-card";
    const bbq = document.createElement("h3");
    bbq.innerHTML = "Brisket Plate";
    const bbq_summary = document.createElement("p");
    bbq_summary.innerHTML = "1 pound smoked brisket plate served with, jalepeño peppers, pickles, and your choice of side";
    const price6 = document.createElement("h3");
    price6.innerHTML = "25";
    const bbq_pic = new Image ();
    bbq_pic.src = barbeque;
    contentCardSix.appendChild(bbq);
    contentCardSix.appendChild(bbq_summary);
    contentCardSix.appendChild(price6);
    contentCardSix.appendChild(bbq_pic);
    contentElement.appendChild(contentCardSix);

}

export default menuload;