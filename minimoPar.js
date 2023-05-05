function minimoPar(array){
    let novoArray = [];
    let minimo;

    function arrayDePares(array){
        for(let i = 0; i < array.length; i++){
            if(array[i] % 2 == 0){
                novoArray.push(array[i])
            }
        }
        minimo = Math.min(...novoArray);
        return minimo;
    }

    arrayDePares(array);
    return minimo;

}

/*if(%2){
  if(minimo < posicao)*/
