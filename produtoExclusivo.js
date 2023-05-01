function produtoExclusivo(array) {
 
    let array2 = [];

    for(let i = 0; i < array.length; i++){
        let total =1;
            for(let j = 0; j < array.length; j++){
                if(j !== i){
                   total = total *  array[j];
                }
               
            }
            array2.push(total);
    }
    return array2
}

    
