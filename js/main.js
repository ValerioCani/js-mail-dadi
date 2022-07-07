// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?

// ** BONUS: Usiamo un input e un bottone per inserire la mail e poi mostriamo i 
//           risultati in pagina. **
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro 
//    programma così come lo faremmo “a mano”
// Buon lavoro e buon divertimento


const listaEmail = ['harry.potter@tiscali.co.uk', 'ken.ilguerriero@yahoo.jp', 'pollon.combinaguai@outlook.gr', 'lupinIII.ladro@libero.fr', 'salvatore.aranzulla@virgilio.it'];
const invitati = listaEmail.length;
const mailInput = prompt('digita il tuo indirizzo E-Mail');


for(let i=0 ; i<invitati && mailInput!==listaEmail[i-1]; i++){
    if( mailInput==listaEmail[i]){
        alert('lei compare tra gli invitati');
    } else if(i=invitati-1){
        alert('lei non compare tra gli invitati')
    } else {}
    console.log(i);
}//qui fa i++


