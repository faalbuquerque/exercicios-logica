
let numAnterior = 0;

let numAtual = 1;

let resultado;


let teste = prompt('digite um numero');

for(i=1; i<teste; i++){
    
    resultado = numAtual + numAnterior;
    numAnterior = numAtual;
    numAtual = resultado;
    
    
}

console.log(resultado);