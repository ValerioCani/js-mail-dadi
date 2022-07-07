// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?

const numeroComputer = Math.floor(Math.random() * 6) + 1;
const numeroPlayer = Math.floor(Math.random() * 6) + 1;

alert('il tuo numero è ' + numeroPlayer + ', mentre il numero del computer è ' + numeroComputer );

if(numeroComputer>numeroPlayer){
    alert('ha vinto il banco')
} else if(numeroPlayer>numeroComputer){
    alert('hai vinto tu')
} else {
    alert('i numeri sono uguali quindi vince il banco')
}