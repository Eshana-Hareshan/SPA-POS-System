import { getCustomerData } from '../model/CustomerModel.js';
import { getItemData, getItemDataById } from '../model/ItemModel.js';
import { addOrder, getAllOrders } from '../model/OrderModel.js';

$(document).ready(function () {
    loadCustomerCombo();
    loadItemCombo();
    loadOrderHistory();
});

// Customer Combo
const loadCustomerCombo = () => {
    $('#order_customer').empty().append(`<option value="">Select Customer</option>`);

    getCustomerData().forEach(c => {
        $('#order_customer').append(`<option value="${c.id}">${c.id} - ${c.name}</option>`);
    });
};

// Item Combo
const loadItemCombo = () => {
    $('#order_item').empty().append(`<option value="">Select Item</option>`);

    getItemData().forEach(i => {
        $('#order_item').append(
            `<option value="${i.id}">${i.id} - ${i.name}</option>`
        );
    });
};

// Customer Select
$('#order_customer').on('change', function () {
    let id = $(this).val();

    let customer = getCustomerData().find(c => c.id === id);

    $('#order_customer_name').val(customer ? customer.name : "");
});

// Item Select
$('#order_item').on('change', function () {
    let id = $(this).val();

    let item = getItemDataById(id);

    if (item) {
        $('#order_item_price').val(item.price);
    } else {
        Swal.fire({ icon: "error", title: "Invalid item!" });
    }
});

// Place Order
$('#place_order_btn').on('click', function () {

    let orderId = $('#order_id').val();
    let customerId = $('#order_customer').val();
    let customerName = $('#order_customer option:selected').text();    console.log(customerId);
    let itemId = $('#order_item').val();
    let qty = Number($('#order_qty').val());

    // VALIDATION
    if (orderId === "") {
        Swal.fire({ icon: "error", title: "Enter Order ID!" });
        return;
    }
    if (getAllOrders().find(o => o.id === orderId)) {
        Swal.fire({ icon: "error", title: "Order ID already exists!" });
        return;
    }
    if (customerName === "") {
        Swal.fire({ icon: "error", title: "Select Customer!" });
        return;
    }
    if (itemId === "") {
        Swal.fire({ icon: "error", title: "Select Item!" });
        return;
    }
    if (!qty || qty <= 0) {
        Swal.fire({ icon: "error", title: "Invalid Quantity!" });
        return;
    }

    let customer = getCustomerData().find(c => c.id === customerId);
    let item = getItemDataById(itemId);

    if (qty > Number(item.quantity)) {
        Swal.fire({
            icon: "error",
            title: "Not enough stock!"
        });
        return;
    }

    if (!customer) {
        Swal.fire({ icon: "error", title: "Customer not found!" });
        return;
    }

    if (!item) {
        Swal.fire({ icon: "error", title: "Item not found!" });
        return;
    }

    let total = qty * item.price;

    let order = [{itemId: item.id, name: item.name, qty: qty, price: item.price, total: total}];

    addOrder(
        orderId,
        new Date().toISOString().split('T')[0],
        customerName,
        order,
        total
    );

// deduct item quantity
    item.quantity = Number(item.quantity) - Number(qty);
    
    loadOrderHistory();

    if (window.loadItemTbl) {
        window.loadItemTbl();
    }

    if (window.refreshItemCombo) {
        window.refreshItemCombo();
    }

    Swal.fire({
        icon: "success",
        title: "Order placed successfully!"
    });

    clearOrderForm();
});

// Order History
const loadOrderHistory = () => {

    $('#order_history_table').empty();

    getAllOrders().forEach(o => {

        let itemNames = o.items.map(i => i.name).join(", ");

        $('#order_history_table').append(`
            <tr>
                <td>${o.id}</td>
                <td>${o.date}</td>
                <td>${o.customerName}</td>
                <td>${itemNames}</td>
                <td>${o.total}</td>
            </tr>
        `);
    });
};

const clearOrderForm = () => {

    $('#order_id').val("");
    $('#order_customer').val("");
    $('#order_customer_name').val("");

    $('#order_item').val("");
    $('#order_item_name').val("");
    $('#order_item_price').val("");

    $('#order_qty').val("");
};

window.refreshCustomerCombo = loadCustomerCombo;
window.refreshItemCombo = loadItemCombo;