window.onload = () =>{
    let numero = prompt('Digite um número:');
    let resultado = fib(numero);
    alert(`O resultado é: ${resultado}`);
}


function fib(numero){

    let numAnterior = 0;
    let numAtual = 1;
    let resultado;

    for(i=1; i<numero; i++){
    
        resultado = numAtual + numAnterior;
        numAnterior = numAtual;
        numAtual = resultado;
         
    }
    return resultado;
}





