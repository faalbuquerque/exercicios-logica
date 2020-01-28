window.onload = ()=>{

    let oneInput = Number(prompt("Digite o primeiro numero:"));
    let twoInput = Number(prompt("Digite o segundo numero:"));

    let result = mult(oneInput, twoInput);

    alert(`${oneInput} x ${twoInput} = ${result}`);
}


function mult(oneNum, twoNum){

    let total = 0;
 
    for(i = 1; i <= twoNum; i++) total =  total + oneNum;

    return total;
}
