function valorMaisBaixoDoArray(array){
    let menorValor = array[0];

    for(let i = 0; i < array.length; i++){
        let posicaoAtual = array[i];
        if(posicaoAtual < menorValor){
            menorValor = posicaoAtual;
        }
    }
    return menorValor;
}