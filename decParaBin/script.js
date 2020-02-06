window.onload = ()=>{
    let num = prompt("Digite um número decimal: ")
    let binNum = decParaBin(num);
    alert(`O número : ${num} transformado em binario é: ${binNum}`)
}

function decParaBin(num){
    let resto;
    let bin = [];

    for(i = 0; i<=num; i++){
        resto = num % 2;
        num = parseInt(num/2);
        bin.push(resto);

        if(num == 1) {
            bin.push(num);
            break;
        }
    }
    return bin.reverse().join('');
}