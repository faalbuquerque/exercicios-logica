window.onload = ()=>{
    let  cap = prompt("Digite o capital inicial: ");
    let meses = prompt("Digite o periodo em meses: ");
    let juros = prompt("Digite o juros ao mes: ");

    result = montante(cap, meses, juros);

    alert(`O valor do montante total é : ${result}`);
}

    function montante(capital, periodo, juros){
        let montanteCalc = 1 + (juros/100);
        let montanteTotal = (capital * elevado(montanteCalc, periodo)).toFixed(2);
        return montanteTotal;
    }

    function elevado(numero, elev){
        let potencia = 1;
        for(i = 0; i < elev; i++){  
        potencia = potencia * numero;
        }
        return potencia
    }