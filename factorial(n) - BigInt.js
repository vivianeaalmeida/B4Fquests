function factorial(n) {
  let fatorial = BigInt(n); // declara fatorial como BigInt
  if (n === 0 || n === 1) 
    return 1n; // retorna 1 como BigInt
  while (n > 1) {
    n--;
    fatorial = fatorial * BigInt(n); // realiza a multiplicação com BigInt
  }
  return fatorial;
}
console.log(factorial(20n)); // chama a função com o parâmetro 20n, que é um BigInt

  }
  return resultado;
}

