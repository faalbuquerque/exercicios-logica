window.onload = ()=>{

    let weight = prompt('Digite o seu peso:');
    let height = prompt('Digite a sua altura:');

    let resultImc = imcCalc(weight, height);

    alert(`O resultado do seu IMC é: ${resultImc}.`);
}

function imcCalc(weight, height){
    let calcImc = (weight / (height * height)).toFixed(2);
    return calcImc;
}

function imc(){
    if(calc < 18.5) return 'Abaixo do peso';
    if(calc >= 18.5 && calc <= 24.9) return 'Peso normal';
    if(calc >= 25 && calc <= 29.9) return 'Sobrepeso';
    if(calc >= 30 && calc <= 34.9) return 'Obesidade grau 1';
    if(calc >= 35 && calc <= 39.9) return 'Obesidade grau 2';
    if(calc > 40) return 'Obesidade grau 3'; 

}
