//Arumando

window.onload = function () {

    let capitalInicial = prompt("Digite o capital inicial");
    let periodo = prompt("Digite o periodo em meses");
    let juros = prompt("Digite o juros ao mes");

    jurosMesDec(juros);
    
    let mont = montante (capitalInicial, periodo);

    alert(`O valor do montante é: ${mont}`);
   
}
   
function jurosMesDec(numJuros){
    return numJuros/100;
}

function montanteCalc(montante){
    return montante = 1 + jurosMesDec();
}

function montante (capitalInicial, periodo ) {
    let montTotal = (capitalInicial * elevado(montanteCalc(), periodo)).toFixed(2);
    return montTotal;
    console.log(montTotal);
}

function elevado(numero, elev) {

    let potencia = 1;

    for(i = 0; i < elev; i++){  
        potencia = potencia * numero;
    }
    return potencia
}


/* antes de refatorar
let capitalInicial = prompt("Digite o capital inicial");
let periodo = prompt("Digite o periodo em meses");
let jurosMes = prompt("Digite o juros ao mes");

let jurosMesDec = jurosMes/100;
let montanteCalc = 1 + jurosMesDec;
let montanteTotal = (capitalInicial * elevado(montanteCalc, periodo)).toFixed(2);

console.log(montanteTotal);

function elevado(numero, elev){
    let potencia = 1;
    for(i = 0; i < elev; i++){  
     potencia = potencia * numero;
    }
    return potencia
}
*/