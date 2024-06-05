import Beans from "./images/beans.jpg";
import header from "./header";

function homePage() {
    header(); // Call the header function to initialize the header

    const content = document.querySelector('#content');
    content.innerHTML = ''; // Clear the existing content

    // Create & Append header element
    const heading = document.createElement('h1');
    const welcomeBox = document.createElement('div');
    welcomeBox.classList.add('welcomeBox');
    content.appendChild(welcomeBox);
    heading.classList.add('h1-theme');
    heading.innerText = "Welcome to Upland.";
    welcomeBox.appendChild(heading);

    // Add a photo to the home page
    const photoOneContainer = document.createElement('div');
    photoOneContainer.classList.add('photo-container');
    const homePhoto = new Image();
    homePhoto.src = Beans;
    photoOneContainer.appendChild(homePhoto);
    content.appendChild(photoOneContainer);

    const textBlock = document.createElement('div');
    textBlock.classList.add('text-block');
    photoOneContainer.appendChild(textBlock);
    const subHeading = document.createElement('h2');
    subHeading.textContent = "We're glad you're here.";
    textBlock.appendChild(subHeading);
    const introPara = document.createElement('p');
    introPara.textContent = "Explore our selection of coffees by using the tabs above.";
    textBlock.appendChild(introPara);
}

export default homePage;
