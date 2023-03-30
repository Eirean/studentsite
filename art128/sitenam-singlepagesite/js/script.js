document.addEventListener('DOMContentLoaded', function () {

    //TOGGLE MENU NAV VIA ADDING/REMOVING A DATA-ATTRIBUTE
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function () {
        if (menunav.getAttribute('data-navstate') === 'open') {
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            menunav.setAttribute('data-navstate', 'open');
        }
    });

    //CLOSE MENU NAV WHEN YOU CLICK ON A NAV LINK
    const navbuttons = document.querySelectorAll('.site-header .site-nav a');
    for(let i = 0; i < navbuttons.length; i++) {
       navbuttons[i].addEventListener('click', function () {
        menunav.setAttribute('data-navstate', 'closed');
       }
    )};



})