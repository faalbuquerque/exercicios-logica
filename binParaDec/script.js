window.onload = ()=>{
    let num = prompt("Digite um número binario");
    let decNum = binParaDec(num);
    alert(`O número: ${num} em decimal é : ${decNum}`);
}

function binParaDec(num) {
    let potencia = 0;
    let numString = num.toString();
    let calcDec = 0;

    for(i = numString.length -1; i>=0; i--){
        calcDec = calcDec + numString[i] * (2 ** potencia);
        potencia++;
    }
    return calcDec;
}