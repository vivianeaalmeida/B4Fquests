function arrayDeNAZero(n){
    //novo array para armazenar os números
    let novoArray = [];
    //condição exigida
    if(n === 0){
        return "Por favor insira um número superior a 0."
    }

    function retornarArray(n){
       while (n >= 0){
           novoArray.push(n);
           n--;
       }
       return novoArray;
    }

    retornarArray(n);
    return novoArray
}