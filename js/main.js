'use strict'

//1. costo km

let costoKM = 0.21;
console.log(costoKM);

//2. numeroKM da percorrere 

let numeroKM = parseInt(prompt('Quanti chilometri vuoi percorrere?', 'es. 10'));
console.log(numeroKM);

//3. numero eta

let etaUtente = parseInt(prompt('Quanti anni hai?', 'es. 20'));
console.log(etaUtente);

//4. calcola prezzo (numeroKM * costoKM)

let prezzoIntero = (numeroKM * costoKM);
console.log(prezzoIntero);

// 5. definizione variabili con sconto

let prezzoScontato1 = parseInt(prezzoIntero - (prezzoIntero * 0.2));
let prezzoScontato2 = parseInt(prezzoIntero - (prezzoIntero * 0.4));

/*6. SE etaUtente < 18 mostra prezzo - 20%  
   altrimenti SE etaUtente ≥ 65 mostra prezzo - 40% 
   altrimenti mostra prezzo */

if (etaUtente < 18) {
    prezzoScontato1;
    console.log(prezzoScontato1);
    alert('Sei minorenne e hai diritto ad uno sconto del 20%');
    document.getElementById("prezzofinale").innerHTML =
        `Il tuo biglietto costa: ${prezzoScontato1} €`;
} else if (etaUtente >= 65) {
    prezzoScontato2;
    console.log(prezzoScontato2)
    alert('Sei over 65 e hai diritto ad uno sconto del 40%');
    document.getElementById("prezzofinale").innerHTML =
        `Il tuo biglietto costa: ${prezzoScontato2} €`;
} else {
    prezzoIntero;
    alert('Paghi il prezzo pieno');
    document.getElementById("prezzofinale").innerHTML =
        `Il tuo biglietto costa: ${prezzoIntero} €`;