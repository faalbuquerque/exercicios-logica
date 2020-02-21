window.onload = () =>{
    let numero = Number(prompt('Digite um número:'));
    
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

    //   for (i = 0, a = 0, b = 1; i < numero; b+=a, a=b-a,  i++) {console.log(a)}

    //   for ([configs inicial]; [condição enquanto]; [mutação por ciclo]){
    //     declaração
    //   }

    //   function fib(x){
    //      return fib(x-1)+fib(x-2)
    //   }
