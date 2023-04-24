function valorMaisAltoDoArray(array){
    let maiorValor = [0];

    for(let i = 0; i < array.length; i++){
        let posicaoAtual = array[i];
        if(posicaoAtual > maiorValor){
            maiorValor = posicaoAtual;
        }
    }
    return maiorValor;
}