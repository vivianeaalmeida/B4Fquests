function cloneDoArray(array){
    return clone([],array,0);
}

function clone(arrayNovo, arrayRecebido, posicao){
    if(arrayNovo.length === arrayRecebido.length){
        return arrayNovo
    }
    arrayNovo.push(arrayRecebido[posicao]);
    return clone(arrayNovo,arrayRecebido,posicao + 1)

}
