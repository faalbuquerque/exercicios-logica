
window.onload = ()=>{
    let cap = Number(prompt("Digite o capital inicial: "));
    let jur = prompt("Digite os juros: ");
    let meses = prompt("Digite a quantidade de meses: ");
   
    let jurResult = jurosSimples(cap, jur, meses);

    alert(`O valor será de : ${jurResult}`);
}

function jurosSimples(capInicial, juros, periodo){
 
    juros = capInicial * (juros/100) * periodo;
    
    let montante = (juros + capInicial);

    return montante.toFixed(2);
}


