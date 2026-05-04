// Nav Bar toggler + Sidebar
let sidebar_open = false;

$('#menu_btn').on('click', function () {

    $(this).toggleClass('active');

    if (!sidebar_open) {
        $('#sidebar').css({display: 'block'});
        $('.content').css({marginLeft: '250px'});
        $('#navbar').addClass('active');

        sidebar_open = true;
    } else {
        $('#sidebar').css({display: 'none'});
        $('.content').css({marginLeft: '0px'});
        $('#navbar').removeClass('active');

        sidebar_open = false;
    }
});

$('#customer_content').css('display', 'block');
$('#item_content').css('display', 'none');
$('#order_content').css('display', 'none');

$('#customer_sidebar_tab').on('click', function () {
    $('#item_content').css('display', 'none');
    $('#order_content').css('display', 'none');

    $('#customer_content').css('display', 'block');
})

$('#item_sidebar_tab').on('click', function () {
    $('#customer_content').css('display', 'none');
    $('#order_content').css('display', 'none');

    $('#item_content').css('display', 'block');
})

$('#order_sidebar_tab').on('click', function () {
    $('#customer_content').css('display', 'none');
    $('#item_content').css('display', 'none');

    $('#order_content').css('display', 'block');
})










