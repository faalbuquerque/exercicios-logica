
window.onload = function () {
}

    let  capitalInicial = prompt("Digite o capital inicial");
    let periodo = prompt("Digite o periodo em meses");
    let jurosMes = prompt("Digite o juros ao mes");

    let jurosMesDec = () => {
        return jurosMes/100;
    }

    let montanteCalc = () => {
        return montanteCalc = 1 + jurosMesDec();
    }

    montante();

    function montante (montanteTotal) {
        montanteTotal = (capitalInicial * elevado(montanteCalc(), periodo)).toFixed(2);
        return document.write("O Valor do Montante é " +  montanteTotal);
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