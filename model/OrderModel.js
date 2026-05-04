import { order_db } from '../db/db.js';

class Order {
    #id;
    #date;
    #customerName;
    #items;
    #total;

    constructor(id, date, customerName, items, total) {
        this.#id = id;
        this.#date = date;
        this.#customerName = customerName;
        this.#items = items;
        this.#total = total;
    }

    get id() {
        return this.#id;
    }

    get date() {
        return this.#date;
    }

    get customerName() {
        return this.#customerName;
    }

    get items() {
        return this.#items;
    }

    get total() {
        return this.#total;
    }

    set id(id) {
        this.#id = id;
    }

    set date(date) {
        this.#date = date;
    }

    set customerName(customerName) {
        this.#customerName = customerName;
    }

    set items(items) {
        this.#items = items;
    }

    set total(total) {
        this.#total = total;
    }
}

const addOrder = (id, date, customerName, items, total) => {
    let order = new Order(id, date, customerName, items, total);
    order_db.push(order);
};

const getAllOrders = () => {
    return [...order_db];
};

const getOrderById = (id) => {
    return order_db.find(o => o.id === id);
};

const deleteOrder = (id) => {
    let index = order_db.findIndex(o => o.id === id);

    if (index !== -1) {
        order_db.splice(index, 1);
    }
};

export {addOrder, getAllOrders, getOrderById, deleteOrder};