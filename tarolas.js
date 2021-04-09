'use strict';

let gomb = document.querySelector('button');

gomb.addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightBlue';
});

if (!localStorage.getItem('nev') || localStorage.getItem('nev') === 'null') {
    udvozol();
    kiir(localStorage.getItem('nev'));
} else {
    kiir(localStorage.getItem('nev'));
}

function udvozol() {
    let nev = window.prompt('Hogy hívnak: ', '');
    localStorage.setItem('nev', nev);
}

function kiir(nev) {
    let fejlec = document.querySelector('h1');
    fejlec.textContent = `Üdvözöllek ${nev}!`;
}


