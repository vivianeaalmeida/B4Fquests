function combineArrays(array1, array2){
    let novoArray = [];
    let tamanho = array1.length > array2.length ? array1.length : array2.length;
    for(let i = 0; i < tamanho; i++){
        if(array1.length > i){
            novoArray.push(array1[i])
        } 
        if(array2.length > i){
            novoArray.push(array2[i])
        }
    }
    return novoArray;
}

console.log(combineArrays([1, 2], [3, 4]));
