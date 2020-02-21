window.onload = () =>{
    let num = prompt('Digite um numero para saber seu fatorial: ');
    msg(num, fatorial(num));
}

function fatorial(num){

    let calc = 1;
    let result;

    for(i=1; i<num; i++){
        let sub = num - i;
        calc = calc * sub;
        result = calc * num;  
    }
    return result;
}

function msg(numero, result){
    alert(`O Fatorial de ${numero} é : ${result}`);
}


/* logica resolvida
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
*/


