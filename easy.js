const active = document.querySelector('.active');
const jet = document.createElement('i');
const inactive = document.querySelector('.inactive')
inactive.setAttribute('onclick', 'location.href = "hard.html"');


//dodaje klasę która wygeneruje ikone odrzutowca
jet.setAttribute('class', 'fas fa-fighter-jet');

//przypisuję do zmiennej element (węzeł) rodzic
const parent = active.parentNode;
//dodaje nowy węzeł (jet), przed elementem istniejącym (active)
parent.insertBefore(jet, active);