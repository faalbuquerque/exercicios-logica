window.onload = ()=>{

    let a = getNumber("entre com um numero");
    let b = getNumber("elevado a quanto?");

    mostra(resultado(a,b,elevado(a,b)));
}

function elevado(numero, elev){
    if(elev == 1) return numero;
        return numero*elevado(numero,elev-1)
}

function resultado(numero,potencia,resultado){
    let texto =`${numero} elevado a ${potencia} é igual a ${resultado}`;
    return texto;
}

function getNumber(pergunta){
    return Number(prompt(pergunta));
}

function mostra(msg){
    alert(msg);
}

 
/* antes de refatorar
function elevadoF(numero, elev){
    let potencia = 1;

    for(i = 0; i < elev; i++){  
     potencia = potencia * numero;

     console.log(potencia)
     console.log(i)
    
    }
    return potencia

}*/





 




