function homeload(){
    const contentElement = document.getElementById("content");

    const pageTitle = document.createElement("div");
    pageTitle.className = "title-card";
    const title = document.createElement("p");
    title.innerHTML = "The Juice";
    pageTitle.appendChild(title);
    contentElement.appendChild(pageTitle);

    const contentCardOne = document.createElement("div");
    contentCardOne.className = "content-card";
    const summary = document.createElement("p");
    summary.innerHTML = "Drinks, Food, Sports... The Juice has it all. Enjoy all sports and premium PPVs on our 50+ TVs, an extensive drink/cocktail menu, and the most mouthwatering dishes in Las Vegas.";
    const summary_heading = document.createElement("h3");
    summary_heading.innerHTML = "Let's get Juicin'";
    contentCardOne.appendChild(summary);
    contentCardOne.appendChild(summary_heading);
    contentElement.appendChild(contentCardOne);
    
    const contentCardTwo = document.createElement("div");
    contentCardTwo.className = "content-card";
    const hours_heading = document.createElement("h2");
    hours_heading.innerHTML = "Hours";
    const sunday = document.createElement("p");
    sunday.innerHTML = "Sunday: 1pm - 10pm";
    const monday = document.createElement("p");
    monday.innerHTML = "Monday: 1pm - 12pm";
    const tuesday = document.createElement("p");
    tuesday.innerHTML = "Tuesday: 1pm - 12pm";
    const wednesday = document.createElement("p");
    wednesday.innerHTML = "Wednesday: 1pm - 12pm";
    const thursday = document.createElement("p");
    thursday.innerHTML = "Thursday: 1pm - 12pm";
    const friday = document.createElement("p");
    friday.innerHTML = "Friday: 1pm - 2am";
    const saturday = document.createElement("p");
    saturday.innerHTML = "Saturday: 1pm - 2am";
    contentCardTwo.appendChild(hours_heading);
    contentCardTwo.appendChild(sunday);
    contentCardTwo.appendChild(monday);
    contentCardTwo.appendChild(tuesday);
    contentCardTwo.appendChild(wednesday);
    contentCardTwo.appendChild(thursday);
    contentCardTwo.appendChild(friday);
    contentCardTwo.appendChild(saturday);
    contentElement.appendChild(contentCardTwo);

    const contentCardThree = document.createElement("div");
    contentCardThree.className = "content-card";
    const location_heading = document.createElement("h2");
    location_heading.innerHTML = "Location";
    const location = document.createElement("p");
    location.innerHTML = "123 Flush Drive, Las Vegas, Nevada";
    contentCardThree.appendChild(location_heading);
    contentCardThree.appendChild(location);
    contentElement.appendChild(contentCardThree);
}

export default homeload;