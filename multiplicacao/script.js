window.onload = ()=>{

    let primeiroNumero = Number(prompt("Digite o primeiro numero:"));
    let segundoNumero = Number(prompt("Digite o segundo numero:"));
    let resultado = mult(primeiroNumero, segundoNumero);

    alert(`${primeiroNumero} x ${segundoNumero} = ${resultado}`);
}

function mult(num1, num2){
    let total = 0;
    for(i = 1; i <= num2; i++) total =  total + num1;
    return total;
}
