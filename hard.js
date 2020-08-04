const active = document.querySelector('.active');
const jet = document.createElement('i');
const inactive = document.querySelector('.inactive')

//kliknięcie przenosi w trym gry łatwy
inactive.setAttribute('onclick', 'location.href = "easy.html"');


//dodaje klasę która wygeneruje ikone odrzutowca
jet.setAttribute('class', 'fas fa-fighter-jet');

//przypisuję do zmiennej element (węzeł) rodzic
const parent = active.parentNode;
//dodaje nowy węzeł (jet), przed elementem istniejącym (active)
parent.insertBefore(jet, active);

//dodaje flagę żeby umożliwić zmiany kształtu gracza (kółko lub krzyżyk)
let flag = false;

const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');

[a1, a2, a3, b1, b2, b3, c1, c2, c3].forEach((item) => {
    item.addEventListener('click', () => {
        /* funkcja która dodaje kółko lub krzyżyk w klikniętym polu */
        if (item.childElementCount == 0) {
            /* instrukcja warunkowa zapobiegająca dodawaniu więcej niż jednej figuty w jednym polu */
            const shape = document.createElement('i');
            if (flag) {
                /* instrukcja warunkowa która decyduje jaką figurę ma aktualnie gracz */
                shape.setAttribute('class', 'far fa-circle');
            } else {
                shape.setAttribute('class', 'fas fa-times');
            }
            // console.log(item.childElementCount)
            item.appendChild(shape);
        }



    })
})