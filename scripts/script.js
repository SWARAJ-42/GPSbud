let nav_button = document.getElementsByClassName('hamburger-lines')[0];
let line1 = document.getElementsByClassName('line')[0];
let line2 = document.getElementsByClassName('line')[1];
let line3 = document.getElementsByClassName('line')[2];
let nav = document.getElementsByTagName('nav')[0];

nav_button.addEventListener('click', () => {
    nav.classList.toggle('inc-width');
    line1.classList.toggle('animate_on_click1');
    line2.classList.toggle('animate_on_click2');
    line3.classList.toggle('animate_on_click3');
})