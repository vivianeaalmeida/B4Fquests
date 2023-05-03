function maiorString(array){
    
    let maisLetras = "";
    
    for(let i = 0; i < array.length; i++){
        if(array[i].length > maisLetras.length){
            maisLetras = array[i];
        }
    }
    return maisLetras
}
