const mapaOcorrencias = palavras.reduce((mapa, palavra) => {
  if (mapa[palavra]) {
    mapa[palavra]++;
  } else {
    mapa[palavra] = 1;
  }
  return mapa;
}, {});

/*
O método reduce() percorre cada elemento do array palavras e aplica a função de callback que você forneceu como parâmetro. O segundo parâmetro do método é o valor inicial do acumulador, que no nosso caso é um objeto vazio {}.
A função de callback recebe dois parâmetros: o acumulador (no nosso caso, o objeto mapa) e o elemento atual do array (a palavra).
Dentro da função de callback, verificamos se a palavra já existe no mapa. Se sim, incrementamos o valor da chave correspondente. Caso contrário, adicionamos a chave com o valor 1.
Por fim, a função retorna o objeto mapa atualizado, que é usado como acumulador na próxima iteração.*/
