// Customer Save
document.getElementById('save_customer_btn').addEventListener('click', function () {

    const id = document.getElementById('cust_id').value;
    const name = document.getElementById('cust_name').value;
    const address = document.getElementById('cust_address').value;
    const contact = document.getElementById('cust_contact').value;

    if (!id || !name || !address || !contact) {
        alert("Please fill all fields");
        return;
    }

    const newCustomer = `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${address}</td>
            <td>${contact}</td>
        </tr>
    `;

    document.getElementById('customer_table_body').innerHTML += newCustomer;

    document.getElementById('cust_id').value = '';
    document.getElementById('cust_name').value = '';
    document.getElementById('cust_address').value = '';
    document.getElementById('cust_contact').value = '';
});

// Customer Details Reset
// document.getElementById('reset_customer_btn').addEventListener('click', function () {
//
// // const cleanCustomerForm = () => {
// //     $('#reset_customer_btn').click();
// // }