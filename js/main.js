'use strict'

// Recupero gli elementi dalla pagina
const myElement = document.getElementById('prezzofinale');
//1. costo km

const costoKM = 0.21;
console.log(costoKM);

//2. numeroKM da percorrere 

const numeroKM = parseInt(prompt('Quanti chilometri vuoi percorrere?', 'es. 10'));
console.log(numeroKM);

//3. numero eta

const etaUtente = parseInt(prompt('Quanti anni hai?', 'es. 20'));
console.log(etaUtente);

//4. calcola prezzo (numeroKM * costoKM)

const prezzoIntero = (numeroKM * costoKM);
console.log(prezzoIntero);

// 5. definizione variabili con sconto


/*6. SE etaUtente < 18 mostra prezzo - 20%  
altrimenti SE etaUtente ≥ 65 mostra prezzo - 40% 
altrimenti mostra prezzo */

let prezzoFinale = prezzoIntero;

if (etaUtente < 18) {
    const prezzoScontato1 = parseInt(prezzoIntero - (prezzoIntero * 0.2));
    prezzoFinale = prezzoScontato1;
} else if (etaUtente >= 65) {
    prezzoFinale = prezzoScontato2;
    const prezzoScontato2 = parseInt(prezzoIntero - (prezzoIntero * 0.4));
}

myElement.innerHTML = `Il tuo biglietto costa: ${prezzoFinale} €`;