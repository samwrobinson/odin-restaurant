import header from "./header";
import Item from "./Item";
import latteBeans from './images/latte.jpg';
import Latte from './images/series.jpg';
import PourOver from './images/pour.jpg';

function menuPage() {
    header();

    const content = document.querySelector('#content');
    const itemsGrid = document.createElement('div');
    itemsGrid.id = 'items-grid';
    content.innerHTML = ''; // Clear the existing content

    const items = [
        new Item('coffee', 5.99, latteBeans),
        new Item('latte', 3.99, Latte),
        new Item('Pour Over', 4.00, PourOver),
    ];

    items.forEach(item => {
        itemsGrid.appendChild(item.element);
    });

    content.appendChild(itemsGrid);
}

export default menuPage;
