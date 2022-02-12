'use strict'

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
    })

    const cards = document.querySelectorAll('.card__inner');

    cards.forEach(card => card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    }))

    $('.header__burger').click(function(event){
        $('.header__list').toggleClass('active');
    })
})