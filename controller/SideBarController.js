// // Nav Bar toggler
// const navbarToggle = document.querySelector('.navbar-toggler');
//
// navbarToggle.addEventListener('click', () => {
//     navbarToggle.classList.toggle('active');
// });
//
// // Side Bar
// let sidebar_open = true;
//
// $('#menu_btn').on('click', function () {
//     if(sidebar_open) {
//         $('#sidebar').css({display: 'block'});
//         $('.content').css({marginLeft: '250px'});
//         sidebar_open = false;
//     } else {
//         $('#sidebar').css({display: 'none'});
//         $('.content').css({marginLeft: '0px'});
//         sidebar_open = true;
//
//     }
// })

// Nav Bar toggler + Sidebar together
let sidebar_open = false; // ✅ start CLOSED

$('#menu_btn').on('click', function () {

    // hamburger animation
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













