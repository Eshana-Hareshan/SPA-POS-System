$(".nav-link").on("click", function () {

    $(".nav-link").removeClass("active");
    $(this).addClass("active");

});


let sidebar_open = false;

$("#menu_btn").on("click", function () {

    $(this).toggleClass("active");

    if (!sidebar_open) {

        $("#sidebar").css({display: "block"});
        $(".content").css({marginLeft: "250px"});
        $("#navbar").addClass("active");

        sidebar_open = true;

    } else {

        $("#sidebar").css({display: "none"});
        $(".content").css({marginLeft: "0"});
        $("#navbar").removeClass("active");

        sidebar_open = false;
    }

});


$("#customer_content").css("display", "none");
$("#item_content").css("display", "none");
$("#order_content").css("display", "none");

$("#dashboard_content").css("display", "none");

// ================= DASHBOARD =================

$("#dashboard_sidebar_tab").on("click", function () {

    $("#customer_content").css("display", "none");
    $("#item_content").css("display", "none");
    $("#order_content").css("display", "none");

    $("#dashboard_content").css("display", "block");

});

// ================= CUSTOMER =================

$("#customer_sidebar_tab").on("click", function () {

    $("#dashboard_content").css("display", "none");
    $("#item_content").css("display", "none");
    $("#order_content").css("display", "none");

    $("#customer_content").css("display", "block");

});

// ================= ITEM =================

$("#item_sidebar_tab").on("click", function () {

    $("#dashboard_content").css("display", "none");
    $("#customer_content").css("display", "none");
    $("#order_content").css("display", "none");

    $("#item_content").css("display", "block");

});

// ================= ORDER =================

$("#order_sidebar_tab").on("click", function () {

    $("#dashboard_content").css("display", "none");
    $("#customer_content").css("display", "none");
    $("#item_content").css("display", "none");

    $("#order_content").css("display", "block");

});

// ================= LOGOUT =================

$("#logout_btn").on("click", function () {

    $("#login-page").css("display", "flex");
    $("#navbar").css("display", "none");
    $("#sidebar").css("display", "none");
    $(".content").css("display", "none");

    sidebar_open = false;

    $("#menu_btn").removeClass("active");
    $("#navbar").removeClass("active");
    $(".content").css({marginLeft: "0"});
    $(".nav-link").removeClass("active");
    $("#dashboard_sidebar_tab .nav-link").addClass("active");

});