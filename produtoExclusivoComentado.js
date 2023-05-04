function produtoExclusivo(array) {
    let novoArray = [];

    for(let i = 0; i < array.length; i++){
        console.log(array[i])
        let multiplicacao = 1 //Para nao multiplicar por 0 e também para colocar um novo elemento no push, o elemento da multiplicacao
        for(let j = 0; j < array.length; j++){
            console.log(array[j])
            //para fazer o loop novamente e a comparação entre o mesmo número. Só entra na condição caso o número seja diferente. Então o total recebe ele mesmo que é 1 (para fins de multiplicação e o próximo elemento, que não o igual.)
            if(j !== i){
                multiplicacao = multiplicacao * array[j]
            }
        }
        novoArray.push(multiplicacao);
    }
    return novoArray;
}
console.log(produtoExclusivo([1, 2, 3]))
console.log(produtoExclusivo([7, 1, 2]))

//faz loop, i passa em 1.
//faz loop, j passa em 1

//total = 1 * 2 => total = 2
//total = 2 * 3 => total = 6
//acaba array, faz push do total.
