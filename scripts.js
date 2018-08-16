'use strict';

const form = document.querySelector('form');
form.addEventListener('submit', function(event){
//zatrzymanie domyslengo dzialania przeglądarki
event.preventDefault();
const name = document.querySelector('input:nth-of-type(1)');
const surname = document.querySelector('input:nth-of-type(2)');
document.querySelector('#result').innerHTML = `Twoje imię to: <b>${name.value}</b> <br> Twoje nazwisko to: <b>${surname.value}</b>`;
});