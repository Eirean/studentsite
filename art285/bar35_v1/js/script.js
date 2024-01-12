console.log("hello");

// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-sectionstate", "active");
        } else {
            entry.target.setAttribute("data-sectionstate", "inactive");
        }
    });
});


document.querySelectorAll(".animate-me-on-scroll").forEach((section) => {
    myobserver.observe(section);
});

// TOGGLE THE MAIN MENU VIA MENU BUTTON
const mymenubutton = document.querySelector('.site-header .menu-button');
const mysitenav = document.querySelector('.site-header .site-nav');

mymenubutton.onclick = function() {
    // if nav is open, then close it; else open it
    if ( mysitenav.getAttribute('data-navstate') === 'open') {
        mysitenav.setAttribute( 'data-navstate','closed');
    } else {
        mysitenav.setAttribute('data-navstate','open');
    }
};