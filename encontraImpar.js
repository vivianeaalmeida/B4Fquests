function encontraImpar(array){
    let primeiroElementoImpar;

    for(let i = 0; i < array.length; i++){
        let posicao = array[i];
        if(posicao % 2 === 1){
            primeiroElementoImpar = posicao;
            break;
        }
    }
    return primeiroElementoImpar;
}