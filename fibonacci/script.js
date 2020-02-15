
let num1 = 0;

let num2 = 1;

let numR = num1+num2;

let numR2 = numR + num2;

//console.log('valor numR: ', numR, 'valor numR2: ', numR2);


for(i=0; i<1; i++){
    temp = num2;
    num2 = numR;
    numR = numR2;

    //console.log('valor num2: ', num2, 'valor numR: ', numR);
}


for(i=0; i<1; i++){
    numR = num1+num2;
    numR2 = numR + num2;
    
}

index = prompt('fib em qual posicao')
numAtual = 1
numAnterior = 0
resultadoParcial = ''


for (let i = 1; i < index; i++) {
     
    resultadoParcial =  numAtual + numAnterior
    numAnterior = numAtual
    numAtual = resultadoParcial
    
    
}

console.log(resultadoParcial)

/*
    let a = 5
    let b = 8
    let temp = "";
    console.log(`a: ${a} b: ${b} temp: ${temp}`)
    for (let i = 0; i < 1; i++) {
        temp = a
        a = b
        b = temp
        temp = ''
    }
    console.log(`a: ${a} b: ${b} temp: ${temp}`)
*/
