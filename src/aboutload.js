function aboutload(){
    const contentElement = document.getElementById("content");

    const pageTitle = document.createElement("div");
    pageTitle.className = "title-card";
    const title = document.createElement("p");
    title.innerHTML = "Contact Us";
    pageTitle.appendChild(title);
    contentElement.appendChild(pageTitle);

    const contentCardOne = document.createElement("div");
    contentCardOne.className = "content-card";
    const store = document.createElement("h3");
    store.innerHTML = "Vegas Store";
    const store_info = document.createElement("p");
    const store_number = document.createElement("p");
    const store_email = document.createElement("p");
    store_info.innerHTML = "123 Flush Dr. Location";
    store_number.innerHTML = "+1 (123) 456-7890";
    store_email.innerHTML = "store@theJuice.com";
    contentCardOne.appendChild(store);
    contentCardOne.appendChild(store_info);
    contentCardOne.appendChild(store_number);
    contentCardOne.appendChild(store_email);
    contentElement.appendChild(contentCardOne);

    const contentCardTwo = document.createElement("div");
    contentCardTwo.className = "content-card";
    const corp = document.createElement("h3");
    corp.innerHTML = "Corporate";
    const corp_info = document.createElement("p");
    const corp_number = document.createElement("p");
    const corp_email = document.createElement("p");
    corp_info.innerHTML = "Feedback, Franchising, and Other Inquiries";
    corp_number.innerHTML = "+1 (123) 456-7891";
    corp_email.innerHTML = "corporate@theJuice.com";
    contentCardTwo.appendChild(corp);
    contentCardTwo.appendChild(corp_info);
    contentCardTwo.appendChild(corp_number);
    contentCardTwo.appendChild(corp_email);
    contentElement.appendChild(contentCardTwo);

    const contentCardThree = document.createElement("div");
    contentCardThree.className = "content-card";
    const hir = document.createElement("h3");
    hir.innerHTML = "Hiring Department";
    const hir_info = document.createElement("p");
    const hir_number = document.createElement("p");
    const hir_email = document.createElement("p");
    hir_info.innerHTML = "Employment Iquiries";
    hir_number.innerHTML = "+1 (123) 456-7892";
    hir_email.innerHTML = "hiring@theJuice.com";
    contentCardThree.appendChild(hir);
    contentCardThree.appendChild(hir_info);
    contentCardThree.appendChild(hir_number);
    contentCardThree.appendChild(hir_email);
    contentElement.appendChild(contentCardThree);
}

export default aboutload;