const parolaUtente = prompt("inserisci una parola!");


const arrayParolaOk = parolaUtente.split("");
const arrayParola = parolaUtente.split("");
const arrayInvertito = arrayParola.reverse();
let controllopali = false;

console.log(arrayParolaOk);
console.log(arrayInvertito);

function controllopalindroma() {
    for (let i=0 ; i < arrayParolaOk.length; i++){

        if (arrayParolaOk[i] === arrayInvertito[i]){
            controllopali = true;
        } else {
            controllopali = false;
            i = arrayParolaOk.length;
        }
            
        
    }

}

controllopalindroma();

if (controllopali === true){
    let result = alert("è poli");
} else {
    let result = alert("non è poli");
}