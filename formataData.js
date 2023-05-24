function formataData(data) {
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear().toString();

  return mes + '-' + dia + '-' + ano;
}

console.log(formataData(new Date(2022, 3, 4))); // "04-04-2022"


function formataData(data) {
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // adiciona +1 para compensar o index de 0 a 11
  const ano = data.getFullYear().toString();
  return `${dia}-${mes}-${ano}`;
}

console.log(formataData(new Date(2022, 03, 04))); // saída: "04-04-2022" 
