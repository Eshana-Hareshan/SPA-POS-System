import {addCustomerData, updateCustomerData, deleteCustomerData, getCustomerData, getCustomerDataByIndex, getCustomerDataById} from '../model/CustomerModel.js';
import {check_nic, check_phone} from '../utils/regex_util.js';

//------------------------- Load Customer Tbl (Read) ------------------------------
const loadCustomerTbl = () => {
    $('#customer_table_body').empty();
    let customer_db = getCustomerData();
    customer_db.map((item, index) => {
        let new_row = `<tr data-index="${index}"> <td>${item.id}</td> <td>${item.name}</td> <td>${item.nic}</td> <td>${item.phone}</td> <td>${item.address}</td> </tr>`;
        $('#customer_table_body').append(new_row);
    });
}

//------------------------- Clean Customer Form ------------------------------
const cleanCustomerForm = () => {
    $('#customer_reset_btn').click();
}

//------------------------- Click on Student Row ------------------------------
$('#customer_table_body').on('click', 'tr', function () {
    let customer_obj = getCustomerDataByIndex($(this).index());

    $('#customer_id_input').val(customer_obj.id);
    $('#customer_name_input').val(customer_obj.name);
    $('#customer_nic_input').val(customer_obj.nic);
    $('#customer_phone_input').val(customer_obj.phone);
    $('#customer_address_input').val(customer_obj.address);
})

//------------------------- Start: Student Add (Create) ------------------------------
$('#customer_save_btn').on('click', function () {

    let id = $('#customer_id_input').val();
    let name = $('#customer_name_input').val();
    let nic = $('#customer_nic_input').val();
    let phone = $('#customer_phone_input').val();
    let address = $('#customer_address_input').val();

    (id === "") ? Swal.fire({ icon: "error", title: "Invalid ID!" }) :
        (getCustomerDataById(id)) ? Swal.fire({ icon: "error", title: "ID already exists!" }) :
            (name === "") ? Swal.fire({ icon: "error", title: "Invalid Name!" }) :
                (!check_nic(nic)) ? Swal.fire({ icon: "error", title: "Invalid NIC!" }) :
                    (!check_phone(phone)) ? Swal.fire({ icon: "error", title: "Invalid Phone!" }) :
                        (address === "") ? Swal.fire({ icon: "error", title: "Invalid Address!" }) :
                            (addCustomerData(id, name, nic, phone, address));
    cleanCustomerForm();
    Swal.fire({ icon: "success", title: "Customer saved successfully!"});
    loadCustomerTbl();
});
//------------------------- End: Customer Add ------------------------------

//------------------------- Start: Customer Update (Update) ------------------------------
$('#customer_update_btn').on('click', function () {

    let id = $('#customer_id_input').val();
    let name = $('#customer_name_input').val();
    let nic = $('#customer_nic_input').val();
    let phone = $('#customer_phone_input').val();
    let address = $('#customer_address_input').val();

    (id === "") ? Swal.fire({ icon: "error", title: "Invalid ID!" }) :
        (!getCustomerDataById(id)) ? Swal.fire({ icon: "error", title: "Customer not found!" }) :
            (name === "") ? Swal.fire({ icon: "error", title: "Invalid Name!" }) :
                (!check_nic(nic)) ? Swal.fire({ icon: "error", title: "Invalid NIC!" }) :
                    (!check_phone(phone)) ? Swal.fire({ icon: "error", title: "Invalid Phone!" }) :
                        (address === "") ? Swal.fire({ icon: "error", title: "Invalid Address!" }) :
                            (updateCustomerData(id, name, nic, phone, address));
    cleanCustomerForm();
    Swal.fire({ icon: "success", title: "Customer updated successfully!" });
    loadCustomerTbl();
});
//------------------------- End: Customer Update ------------------------------

//------------------------- Start: Customer Delete (Delete) ------------------------------
$('#customer_delete_btn').on('click', function () {

    let id = $('#customer_id_input').val();

    (id === "") ? Swal.fire({ icon: "error", title: "Invalid ID!" }) :
        (!getCustomerDataById(id)) ? Swal.fire({ icon: "error", title: "Customer not found!" }) :
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!"
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        deleteCustomerData(id);
                    }
            })
    cleanCustomerForm();
    Swal.fire({ icon: "success", title: "Customer deleted successfully!" });
    loadCustomerTbl();
});

//------------------------- End: Customer Delete ------------------------------