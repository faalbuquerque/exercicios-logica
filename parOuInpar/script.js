window.onload = ()=>{
  let num = prompt('Digite um número:');
  let result = parOuImpar(num);

  alert(`O número ${num} é ${result}.`);
} 

function parOuImpar(num){
  return num % 2 ? 'Impar' : 'Par';
}