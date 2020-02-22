window.onload = () =>{
    let num = Number(prompt('Digite um numero para saber seu fatorial: '));
    //msg(num, fatorial(num));
    alert(fatF(num))
}

function msg(numero, result){
    alert(`O Fatorial de ${numero} é : ${result}.`);
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

function fatX(y){
    let result  = y
    for (let i = y-1; i > 0; i--) {
        result = result*(y-i)
    }
    return result;
}


function fatF(numero){
    if(numero == 1) return 1;
        return numero * fatF(numero-1);
}

/*
    Ex: fat(4) = 24;   
    4x(4-1)x(4-2)x(4-3) = 4x3x2x1 = 24


    fat(y) = ?

    Ex: fat(4) = 24; 

    y*(y-1)*(y-2)*(y-3)

    *(y-i)

*/