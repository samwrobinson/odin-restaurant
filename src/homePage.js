import Beans from "./images/beans.jpg";
import header from "./header";
import menuPage from "./menuPage";

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
    const introPara = document.createElement('p');
    introPara.textContent = "Explore our selection of coffees by using the tabs above.";
    welcomeBox.appendChild(introPara);

    // Add a photo to the home page
    const photoOneContainer = document.createElement('div');
    photoOneContainer.classList.add('photo-container');
    const homePhoto = new Image();
    homePhoto.src = Beans;
    photoOneContainer.appendChild(homePhoto);
    photoOneContainer.style.position = 'relative';
    content.appendChild(photoOneContainer);
    const exploreMore = document.createElement('h4');
    exploreMore.textContent = 'Explore now.';
    photoOneContainer.appendChild(exploreMore);
    exploreMore.style.position = 'absolute';
    exploreMore.style.top = '40%';
    exploreMore.style.color = '#f2f2f2';

    const removeDOM = () => {
        content.innerHTML = ``;
    }

    photoOneContainer.addEventListener('click', () => {
        removeDOM();
        menuPage();
    });
}

export default homePage;
