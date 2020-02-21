/*
12 - Sabendo que um número fatorial x! é x*(x-1)*(x-2)*(x-3)...x1 Faça um algoritmo que calcule o fatorial de um numero: 
    
Ex: fat(4) = 24;   
4x(4-1)x(4-2)x(4-3) = 4x3x2x1 = 24
*/

/*
window.onload = () =>{
    let numero = prompt('Digite um numero para saber seu fatorial: ');
    let resultado = fatorial(numero);
    let msg = alert(`O fatorial de ${numero} é: ${resultado}`);
}
*/

let num = 10;
let calc = 1;

//fazer um for decrescente para contar do num até um 1
for(i=1; i<num; i++){
    console.log('valor de i: ',i);

    let sub = num - i;
    console.log('subtracao: ',sub);

    calc = calc * sub;
    console.log('multiplicacao: ',calc);

    let result = calc * num;
    console.log('multiplicacao: ',result);
    
}






