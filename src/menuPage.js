import header from "./header";
import Item from "./Item";
import latteBeans from './images/latte.jpg';

function menuPage() {
    header();

    const content = document.querySelector('#content');
    content.innerHTML = ''; // Clear the existing content

    const items = [
        new Item('coffee', 5.99, latteBeans),
    ];

    items.forEach(item => {
        content.appendChild(item.element);
    });
}

export default menuPage;
