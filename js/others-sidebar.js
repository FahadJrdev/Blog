//use window.scrollY to fix sidebar after scrolling
const sidebarLeft = document.querySelector(".sidebar-left");
const sidebarRight = document.querySelector(".sidebar-right");
let body = document.body,
    html = document.documentElement;

function add_fix_on_scroll() {
    sidebarLeft.classList.add("sticky-navbar");
    sidebarRight.classList.add("sticky-navbar");
}

function remove_fix_on_scroll() {
    sidebarLeft.classList.remove("sticky-navbar");
    sidebarRight.classList.remove("sticky-navbar");
}

window.addEventListener('scroll', function() {
    const scroll_pos = window.scrollY;
    if (scroll_pos < 208) {
        remove_fix_on_scroll();
    } else if (window.pageYOffset + window.innerHeight > body.scrollHeight - 342) {
        remove_fix_on_scroll();
    } else {
        add_fix_on_scroll();
    }
});