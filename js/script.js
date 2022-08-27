const burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.skills__rating-percent'),
    scales = document.querySelectorAll('.skills__rating-scale span');

percents.forEach( (item, i) => {
    scales [i].style.width = item.innerHTML;
});

