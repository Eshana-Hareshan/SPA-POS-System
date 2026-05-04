import { item_db } from '../db/db.js';

class Item {
    #id;
    #name;
    #quantity;
    #price;

    constructor(id, name, quantity, price) {
        this.#id = id;
        this.#name = name;
        this.#quantity = quantity;
        this.#price = price;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get quantity() {
        return this.#quantity;
    }

    get price() {
        return this.#price;
    }

    set id(id) {
        this.#id = id;
    }

    set name(name) {
        this.#name = name;
    }

    set quantity(quantity) {
        this.#quantity = quantity;
    }

    set price(price) {
        this.#price = price;
    }
}

// --------------------------- Add Item ---------------------------
const addItemData = (id, name, quantity, price) => {
    let new_item = new Item(id, name, quantity, price);
    item_db.push(new_item);
}

// --------------------------- Update Item ---------------------------
const updateItemData = (id, name, quantity, price) => {
    let obj = item_db.find(item => item.id === id);

    if (obj) {
        obj.name = name;
        obj.quantity = quantity;
        obj.price = price;
    }
}

// --------------------------- Delete Item ---------------------------
const deleteItemData = (id) => {
    let index = item_db.findIndex(item => item.id === id);

    if (index !== -1) {
        item_db.splice(index, 1);
    }
}

// --------------------------- Get All Items ---------------------------
const getItemData = () => {
    return [...item_db];
}

// --------------------------- Get Item by Index ---------------------------
const getItemDataByIndex = (index) => {
    return item_db[index];
}

// --------------------------- Get Item by ID ---------------------------
const getItemDataById = (id) => {
    return item_db.find(item => item.id === id);
}

export {
    addItemData,
    updateItemData,
    deleteItemData,
    getItemData,
    getItemDataByIndex,
    getItemDataById
};