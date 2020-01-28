window.onload = ()=>{

    let weight = prompt('Digite o seu peso:');
    let height = prompt('Digite a sua altura:');

    let resultImc = imc(weight, height);

    alert(`O resultado do seu IMC é: ${resultImc}.`);
}

function imc(weight, height){

    let calc = (weight / (height * height)).toFixed(2);

    if(calc < 18.5) return 'Abaixo do peso';
    if(calc >= 18.5 && calc <= 24.9) return 'Peso normal';
    if(calc >= 25 && calc <= 29.9) return 'Sobrepeso';
    if(calc >= 30 && calc <= 34.9) return 'Obesidade grau 1';
    if(calc >= 35 && calc <= 39.9) return 'Obesidade grau 2';
    if(calc > 40) return 'Obesidade grau 3'; 
}
