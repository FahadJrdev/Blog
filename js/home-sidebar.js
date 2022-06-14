//use window.scrollY to fix sidebar after scrolling
const sidebar = document.querySelector(".sidebar");
let body = document.body,
    html = document.documentElement;

function add_fix_on_scroll() {
    sidebar.classList.add("sticky-navbar");
}

function remove_fix_on_scroll() {
    sidebar.classList.remove("sticky-navbar");
}

window.addEventListener('scroll', function() {
    const scroll_pos = window.scrollY;
    if (scroll_pos < 564) {
        remove_fix_on_scroll();
    } else if (window.pageYOffset + window.innerHeight > body.scrollHeight - 318) {
        remove_fix_on_scroll();
    } else {
        add_fix_on_scroll();
    }
});