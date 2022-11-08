
const btnPari = document.getElementById("btnpari");
const btnDispari = document.getElementById("btndispari");
const vincente = document.getElementById("vincitore")
const chiVince = document.getElementById("chivince");
const numeroUtente = "";
const btnNumeroUt = document.getElementById("btnnumeroUt");

let sceltaUtente = 0;
console.log(numeroUtente)
let numeroCpu = "";
let risultatoSomma = "";
let somma = "";

btnNumeroUt.addEventListener("click", function () {
    let numero = document.getElementById(numeroUt);
    console.log(numero);
})

btnPari.addEventListener("click", function() {
    sceltaUtente = "pari" ;
    console.log(sceltaUtente);
})

btnDispari.addEventListener("click", function() {
    sceltaUtente = "dispari" ;
    console.log(sceltaUtente);
})


function numerorandom() {
    
    return numeroCpu = Math.floor(Math.random()*(5-1+1)+1);
}

numerorandom();
console.log(numeroCpu);


function sommacontrollo(num1 , num2) {
    somma = num1 + num2;
    if(somma % 2 === 0){
        risultatoSomma = "pari";
    } else{
        risultatoSomma = "dispari";
    }
}

sommacontrollo(parseInt(numeroUtente) , parseInt(numeroCpu));

console.log(risultatoSomma);
console.log(somma);

chiVince.addEventListener("click" ,function() {
    if(sceltaUtente === "pari"){
        if(risultatoSomma === "pari"){
            vincente.innerHTML = "VINCE L'UTENTE";
        } else {
            vincente.innerHTML = "VINCE LA CPU";
        }
    }else {
        if(risultatoSomma === "dispari"){
            vincente.innerHTML = "VINCE L'UTENTE";
        } else {
            vincente.innerHTML = "VINCE LA CPU";
        }
    }    
})
