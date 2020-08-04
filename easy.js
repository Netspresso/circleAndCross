const active = document.querySelector('.active');
const jet = document.createElement('i');
const inactive = document.querySelector('.inactive')

//tworzy link który przenosi w tryb gry trudny
inactive.setAttribute('onclick', 'location.href = "hard.html"');


//dodaje klasę która wygeneruje ikone odrzutowca
jet.setAttribute('class', 'fas fa-fighter-jet');

//przypisuję do zmiennej element (węzeł) rodzic
const parent = active.parentNode;
//dodaje nowy węzeł (jet), przed elementem istniejącym (active)
parent.insertBefore(jet, active);

//dodaje flagę żeby umożliwić zmiany kształtu gracza (kółko lub krzyżyk)
let flag = true;
let count = 0;
let random = 0;

const cell1 = document.getElementById('cell1');
const cell2 = document.getElementById('cell2');
const cell3 = document.getElementById('cell3');
const cell4 = document.getElementById('cell4');
const cell5 = document.getElementById('cell5');
const cell6 = document.getElementById('cell6');
const cell7 = document.getElementById('cell7');
const cell8 = document.getElementById('cell8');
const cell9 = document.getElementById('cell9');

const play = (item) => {
    item.addEventListener('click', () => {
        /* funkcja która dodaje kółko lub krzyżyk w klikniętym polu */
        if (count % 2 == 0) {
            /* funkcja która pozwala graczowi dokonać tylko jednego ruchu pod rząd */
            if (item.childElementCount == 0) {
                /* instrukcja warunkowa zapobiegająca dodawaniu więcej niż jednej figuty w jednym polu */
                const shape = document.createElement('i');
                if (flag) {
                    /* instrukcja warunkowa która decyduje jaką figurę ma aktualnie gracz */
                    shape.setAttribute('class', 'far fa-circle');
                } else {
                    shape.setAttribute('class', 'fas fa-times');
                }
                item.appendChild(shape);
                count += 1;
                random = Math.floor(Math.random() * 9);
                if ('cell' + random != item.id) {
                    // console.log(item.id);
                    // console.log(random)
                    if (cells[random].childElementCount == 0) {
                        const shape = document.createElement('i');
                        if (flag) {
                            shape.setAttribute('class', 'fas fa-times');
                        } else {
                            shape.setAttribute('class', 'far fa-circle');
                        }
                        item.appendChild(shape);
                        count += 1;
                    }

                }
                // console.log(item.id);
            }
        }
    })
}

let cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
cells.forEach(play);