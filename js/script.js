
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.


// km
var km = parseInt(prompt('Quanti chilometri vuoi percorrere?'));

// età
var età = parseInt(prompt('Quanti anni hai?'));

// operazione prezzo
var biglietto = 0.21 * km;

// if else
if(età < 18){
    scatola = biglietto - (biglietto * 20) / 100;
} else (età > 65){
    scatola = biglietto - (biglietto * 40) / 100;
}

var scatola = biglietto;

// risultato prezzo
document.getElementById('biglietto').innerHTML = scatola;