window.onload = ()=>{ 

    let numero = prompt(" Digite um numero: ");
    tab(numero);
   
}

function tab(num){

    let mult = [];

    for(let i = 1; i <= 10; i++ ){
        mult.push(`${num} x ${i} = ${i * num}`);
    }
    return mostra.innerHTML = mult.join("<br>");
}
    
