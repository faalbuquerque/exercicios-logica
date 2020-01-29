window.onload = ()=>{
}

    let bin = prompt("Digite um numero binário: ");
    console.log('Numero digitado: ', bin);

    let numArray = bin.split("");
    console.log( 'Numero em array: ', numArray);

    let currNum;
    let beforeInit = 0;
    let calcAnt = [];
    

        for( i=0; i < numArray.length; i++ ){

            currNum = parseInt(numArray[i]);
            console.log('Numeros em int: ', currNum);

            calcAnt = (beforeInit * 2) + currNum;
            console.log('calculo anterior: ', calcAnt);

            console.log(`(Numero anterior comeca em zero: ${beforeInit} x 2) + numero corrente: ${currNum} = ${calcAnt} `);
            
        }

        //criar array que guarda os numeros anteriores!!!!!

        //let calcCurr = (calcAnt * 2) + currNum;
        //console.log(`(Calc anterior: ${calcAnt} x 2) + numero corrente : ${currNum} = ${calcCurr}`);
       
       

    //let calc = ((currNum - 1) * 2) + (currNum);

    //let teste = (beforeNum * 0) + currNum;
    //console.log(teste);

   //for(i=0; i < numArray.length; i++ ){
   // beforeNum = parseInt(numArray[-i]);
   // console.log('numero anterior', beforeNum);
   // }