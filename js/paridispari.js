
const btnPari = document.getElementById("btnpari");
const btnDispari = document.getElementById("btndispari");
const stampaVincitore = document.getElementById("vincitore")
const chiVince = document.getElementById("chivince");
let numeroUtente = "";
const btnNumeroUt = document.getElementById("btnnumeroUt");

let sceltaUtente = 0;
console.log(numeroUtente)
let numeroCpu = "";
let risultatoSomma = "";
let somma = "";

btnNumeroUt.addEventListener("click", function () {
    let numero = document.getElementById("numeroUt").value;
    numeroUtente = numero;
    console.log(numeroUtente);
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




function sommacontrollo(num1 , num2) {
    somma = num1 + num2;
    if(somma % 2 === 0){
        risultatoSomma = "pari";
    } else{
        risultatoSomma = "dispari";
    }
}



chiVince.addEventListener("click" ,function() {
    numerorandom();
    console.log(numeroCpu);
    sommacontrollo(parseInt(numeroUtente) , parseInt(numeroCpu));
    console.log(risultatoSomma);
    console.log(somma);
    
    if(sceltaUtente === "pari"){
        if(risultatoSomma === "pari"){
            stampaVincitore.innerHTML = "VINCE L'UTENTE";
        } else {
            stampaVincitore.innerHTML = "VINCE LA CPU";
        }
    }else {
        if(risultatoSomma === "dispari"){
            stampaVincitore.innerHTML = "VINCE L'UTENTE";
        } else {
            stampaVincitore.innerHTML = "VINCE LA CPU";
        }
    }    
})
