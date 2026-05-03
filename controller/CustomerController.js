// Customer Save
document.getElementById('save_customer_btn').addEventListener('click', function () {

    const id = document.getElementById('customer_id').value;
    const name = document.getElementById('customer_name').value;
    const address = document.getElementById('customer_address').value;
    const contact = document.getElementById('customer_contact').value;

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

    document.getElementById('customer_id').value = '';
    document.getElementById('customer_name').value = '';
    document.getElementById('customer_address').value = '';
    document.getElementById('customer_contact').value = '';
});

// Click table row
$('#customer_table_body').on('click', 'tr', function () {
    let customer_obj = getCustomerDataByIndex($(this).index());

    $('#customer_id').val(customer_obj.id);
    $('#customer_name').val(customer_obj.name);
    $('#customer_address').val(customer_obj.address);
    $('#customer_contact').val(customer_obj.contact);
})