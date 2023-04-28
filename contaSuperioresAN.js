function contaSuperioresAN(array, n){
    let count = 0;
    
    function superiores(array, n){
        
        for(let i = 0; i < array.length; i++){
            if(n < array[i]){
                count++;
            }
        }
        return count;
    }

    superiores(array, n);
    return count;
}

console.log(contaSuperioresAN([1, 2, 3, 4, 5], 2));
