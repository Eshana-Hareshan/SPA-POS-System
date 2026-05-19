import {addItemData, updateItemData, deleteItemData, getItemData, getItemDataByIndex, getItemDataById} from '../model/ItemModel.js';

//------------------------- Load Item Tbl (Read) ------------------------------

const loadItemTbl = () => {
    $('#item_table_body').empty();

    let item_db = getItemData();

    item_db.map((item, index) => {
        let row = `
            <tr data-index="${index}">
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
            </tr>
        `;
        $('#item_table_body').append(row);
    });
};

//------------------------- Clean Item Form ------------------------------
const cleanItemForm = () => {
    $('#item_form')[0].reset();
};

//------------------------- Click on Item Row ------------------------------
$('#item_table_body').on('click', 'tr', function () {
    let index = $(this).data('index');
    let item = getItemDataByIndex(index);

    $('#item_id').val(item.id);
    $('#item_name').val(item.name);
    $('#item_quantity').val(item.quantity);
    $('#item_price').val(item.price);
});

//------------------------- Start: Item Add (Create) ------------------------------
$('#save_item_btn').on('click', function () {

    let id = $('#item_id').val();
    let name = $('#item_name').val();
    let qty = $('#item_quantity').val();
    let price = $('#item_price').val();

    (id === "") ? Swal.fire({ icon: "error", title: "Invalid ID!" }) :
        (getItemDataById(id)) ? Swal.fire({ icon: "error", title: "ID already exists!" }) :
            (name === "") ? Swal.fire({ icon: "error", title: "Invalid Name!" }) :
                (qty === "" || isNaN(qty) || Number(qty) <= 0) ? Swal.fire({ icon: "error", title: "Invalid Quantity!" }) :
                    (price === "" || isNaN(price) || Number(price) <= 0) ? Swal.fire({ icon: "error", title: "Invalid Price!" }) :
                        (addItemData(id, name, qty, price));
    cleanItemForm();
    loadItemTbl();

    Swal.fire({
        icon: "success",
        title: "Item saved successfully!"
    });

    if(window.refreshItemCombo){
        window.refreshItemCombo();
    }
});
//------------------------- End: Item Add ------------------------------

//------------------------- Start: Item Update (Update) ------------------------------
$('#update_item_btn').on('click', function () {

    let id = $('#item_id').val();
    let name = $('#item_name').val();
    let qty = $('#item_quantity').val();
    let price = $('#item_price').val();

    if (!getItemDataById(id)) {
        Swal.fire({ icon: "error", title: "Item not found!" });
        return;
    }

    updateItemData(id, name, qty, price);
    cleanItemForm();
    loadItemTbl();

    Swal.fire({
        icon: "success",
        title: "Item updated successfully!"
    });
});


//------------------------- End: Item Update ------------------------------

//------------------------- Start: Item Delete (Delete) ------------------------------$('#delete_item_btn').on('click', function () {

$('#delete_item_btn').on('click', function () {

    let id = $('#item_id').val();

    (id === "") ? Swal.fire({ icon: "error", title: "Invalid ID!" }) :
        (!getItemDataById(id)) ? Swal.fire({ icon: "error", title: "Item not found!" }) :
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!"
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        deleteItemData(id);

                        cleanItemForm();
                        loadItemTbl();

                        Swal.fire({
                            icon: "success",
                            title: "Item deleted successfully!"
                        });
                    }
                });

});

loadItemTbl();

window.loadItemTbl = loadItemTbl;