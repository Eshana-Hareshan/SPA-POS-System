import {customer_db} from '../db/db.js';

class Customer {
    #id;
    #name;
    #nic;
    #phone;
    #address;

    constructor(id, name, nic, phone, address) {
        this.#id = id;
        this.#name = name;
        this.#nic = nic;
        this.#phone = phone;
        this.#address = address;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get nic() {
        return this.#nic;
    }

    get phone() {
        return this.#phone;
    }

    get address() {
        return this.#address;
    }

    set id(id) {
        this.#id = id;
    }

    set name(name) {
        this.#name = name;
    }

    set nic(nic) {
        this.#nic = nic;
    }

    set phone(phone) {
        this.#phone = phone;
    }

    set address(address) {
        this.#address = address;
    }
}

// --------------------------- Add Customer ---------------------------
const addCustomerData = (cid, cname, cnic, cphone, caddress) => {
    let new_customer = new Customer(cid, cname, cnic, cphone, caddress);
    customer_db.push(new_customer);

    return true;
}

// --------------------------- Update Customer ---------------------------
const updateCustomerData = (cid, cname, cnic, cphone, caddress) => {
    let obj = customer_db.find(item => item.id == cid);

    if (obj) {
        obj.name = cname;
        obj.nic = cnic;
        obj.phone = cphone;
        obj.address = caddress;

        return true;
    }

    return false;
}

// --------------------------- Delete Customer ---------------------------
const deleteCustomerData = (cid) => {
    let index = customer_db.findIndex(item => item.id == cid);

    if (index !== -1) {
        customer_db.splice(index, 1);

        return true;
    }

    return false;
}
// --------------------------- Get Customer ---------------------------
const getCustomerData = () => {
    return customer_db;
}

// --------------------------- Get Customer by Index ---------------------------
const getCustomerDataByIndex = (index) => {
    return customer_db[index];
}

// --------------------------- Get Customer by Id ---------------------------
const getCustomerDataById = (id) => {
    return customer_db.find(item => item.id==id);
}

export {addCustomerData, updateCustomerData, deleteCustomerData, getCustomerData, getCustomerDataByIndex, getCustomerDataById};