function encontraPar(array){
    let primeiroPar = array[4];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0 && array[i] != 0){
            primeiroPar = array[i];
            break;
        }
        
    }
    return primeiroPar
}

console.log(encontraPar([1, 2, 3, 4, 5]))
