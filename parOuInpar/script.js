window.onload = ()=>{

  let num = prompt('Digite um número:');
  let result = oddsOrEven(num);

  alert(`O número ${num} é ${result}.`);

} 


function oddsOrEven(num){

  return num % 2 ? 'impar' : 'par';

}