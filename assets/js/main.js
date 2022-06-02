// Übung lev2_7: Nummern
// Schreibe eine Funktion, die beim Anklicken des Buttons ein Element mit aufsteigenden Nummern erstellt.
// Der HTML und CSS Code befindet sich im Kommentar.
// Nutze
// querySelector()
// addEventListener()
let counter = 0;
// createElement()
// createTextNode()
// appendChild()
// classList

let button = document.querySelector('button');
let umwickeln = document.querySelector('.umwickeln');




button.addEventListener('click', () => {
    let div = document.createElement('div');
    let text = document.createTextNode(counter);
    div.appendChild(text);

    if (counter % 10 == 0) {
        umwickeln.appendChild(div).classList.add('rechteck', 'weiss');
    } else {
        umwickeln.appendChild(div).classList.add('rechteck');
    }
    counter++;
});