'use strict';
//touchstart
//toutcmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.changedTouches);
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });

    //touches
    //targetTouches
    //changedTouches


});