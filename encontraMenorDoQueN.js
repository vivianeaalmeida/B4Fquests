function encontraMenorDoQueN(array, n){

    let menorPosicao = array[0];

    for(let i = 0; i < array.length; i++){
        let posicaoAtual = array[i];
        if(posicaoAtual < n){
            menorPosicao = posicaoAtual;
            break; //primeiro elemento, para.
        }
    }
    return menorPosicao;
}
console.log(encontraMenorDoQueN([1, 2, 3, 4], 3));