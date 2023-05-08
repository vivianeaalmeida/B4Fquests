function contaInteirosDoArray(array){
let count = 0;
    function inteiros(array){
        for(let i = 0; i < array.length; i++){
            if(array[i] === Math.trunc(array[i])){
                count++;
            }
        }
        return count;
    }
    inteiros(array);
    return count;
}
