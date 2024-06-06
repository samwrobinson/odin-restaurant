export default class Item {
    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.element = this.createElement();
    }

    createElement() {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');


        const itemImg = document.createElement('img');
        itemImg.src = this.image;
        itemImg.alt = this.name;
        itemContainer.appendChild(itemImg);

        const itemName = document.createElement('h3');
        itemName.textContent = this.name;
        itemContainer.appendChild(itemName);

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `$${this.price.toFixed(2)}`;
        itemContainer.appendChild(itemPrice);

        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.classList.add('button-38');
        itemContainer.appendChild(addButton);


        return itemContainer;
    }
}
