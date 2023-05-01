function FizzBuzz(n) {
  let novoArray = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      novoArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      novoArray.push("Fizz");
    } else if (i % 5 === 0) {
      novoArray.push("Buzz");
    } else {
      novoArray.push(" ");
    }
  }
  return novoArray;
}

/*o i é porque é tipo um while, já que a comparação é de número a número e não item de array com número. Então meu loop vai de 1 até n 
(que pode ser qualquer valor). 1, 2, 3, 4, 5, 6... (caso n seja 6 por ex)
o if e o else if fazem diferença, e é importante colocar a condição do 15 primeiro.
Na versão original do código, quando um número é um múltiplo de 15, a condição "if (i % 15 === 0)" é verdadeira e "FizzBuzz" é adicionado ao array. 7
No entanto, como essa condição está seguida por outras condições "if" independentes, a condição "if (i % 3 === 0)" também é testada para o mesmo número 
e, como resultado, "Fizz" é adicionado novamente ao array. O mesmo acontece com a condição "if (i % 5 === 0)".

Na nova ordem, a primeira condição testa se o número é um múltiplo de 15. Se isso for verdade, o valor "FizzBuzz" é adicionado ao array e 
nenhuma outra condição será testada para o mesmo número, porque o fluxo de execução passará diretamente para o final do loop.
*/
