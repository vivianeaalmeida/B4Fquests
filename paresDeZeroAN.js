function paresDeZeroAN(n){
    let novoArray = [];

    if(n <= 0){
        return "Por favor insira um número superior a 0."
    }

    function verificaPares(n){
       for(let i = 0; i <= n; i++){ //de 0 a n
           if(i % 2 == 0){
               novoArray.push(i);
           }
       }
       return novoArray;
    }

    verificaPares(n) // qual a relação 
    return novoArray;

}

console.log(paresDeZeroAN(15))