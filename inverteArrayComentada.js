function inverteArray(array){
    let reverso = []; //cria um novo array, o inverso

    function reverter(array){ //cria uma função para reverter o array
        if(array.length !== 0){ //se o tamanho do array eh dif de 0. Talvez um for(?)
            reverso.push(array.pop()); //aqui ele pega o ultimo elemento e o retorna (.pop) e insere o elemento no primeiro lugar da lista com o array.push - Então, no array [4, 3, 2, 1] - o array pop retorna o 1 e insere o 1 com o push. Array continua sendo diferente de 0. Repete a operação. 
            reverter(array); //seria tipo, faça isso enquanto a condição for verdadeira?
        }
    }
    reverter(array);
    return reverso;
}