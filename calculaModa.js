function calculaModa(array){
  // escreve aqui a função
  console.log(array)

  const frequencia = new Map();
  let moda = [];
  let maxFrequencia = 0;

  for(let i = 0; i < array.length; i++){
      const numero = array[i];
      const contagem = frequencia.has(numero)  ? frequencia.get(numero) : 0;
      frequencia.set(numero, contagem + 1);
      if(contagem + 1 > maxFrequencia){
          maxFrequencia = contagem + 1;
          moda = [numero];
      } else if (contagem + 1 === maxFrequencia) {
          moda.push(numero);
      }
  }
  return Math.min(...moda)
}
