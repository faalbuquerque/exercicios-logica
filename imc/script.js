window.onload = ()=>{

    let peso = prompt('Digite o seu peso:');

    let altura = prompt('Digite a sua altura:');

    let calculo = imcCalc(peso, altura);

    let resultadoImc = imcResultado(calculo)

    alert(`O resultado do seu IMC é: ${calculo} : ${resultadoImc}.`);
}

function imcCalc(weight, height){
    let calcImc = (weight / (height * height)).toFixed(2);
    return calcImc;
}

function imcResultado(resultado){

    if(resultado <= 18.5) return 'Abaixo do peso';
    if(resultado > 18.5 && resultado <= 25) return 'Peso normal';
    if(resultado > 25 && resultado <= 30) return 'Sobrepeso';
    if(resultado > 30 && resultado <= 35) return 'Obesidade grau 1';
    if(resultado > 35 && resultado <= 40) return 'Obesidade grau 2';
    if(resultado > 40) return 'Obesidade grau 3'; 
}
