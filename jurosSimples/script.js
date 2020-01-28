window.onload =()=>{

    let capInit = prompt('Qual o seu capital inicial?');
    let interest = prompt('Qual a taxa de juros?');
    let time = prompt("Qual o periodo?");
    let calc = (simpleInterest(capInit, interest, time));

    alert(`O Valor será de: ${calc}`);
}

function simpleInterest(capInit, interest, time){

    let taxaJuros = interest/100;

    interest = capInit * taxaJuros * time;

    let amount = capInit + interest;

    return amount; //toFixed nao esta funcionando
}

