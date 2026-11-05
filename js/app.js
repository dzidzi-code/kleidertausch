const oberteile = document.querySelectorAll('.oberteile img');
const unterteile = document.querySelectorAll('.unterteile img');

function wechsel(kleider) {

    let aktuell, naechstes, vorheriges;


    for (let i = 0; i < kleider.length; i++) {
        if (kleider[i].classList.contains('mitte')) {
            aktuell = i;
            naechstes = (aktuell + 1) % kleider.length;
            vorheriges = (aktuell - 1 + kleider.length) % kleider.length;
        }
    }


    kleider[aktuell].classList.remove('mitte');
    kleider[aktuell].classList.add('links');

    kleider[vorheriges].classList.remove('links');
    kleider[vorheriges].classList.add('rechts');

    kleider[naechstes].classList.remove('rechts');
    kleider[naechstes].classList.add('mitte');

}


setInterval(() => wechsel(oberteile), 1500);
setInterval(() => wechsel(unterteile), 1500);