function ordenaDoMenorAoMaior(array){
    let ordenado = array.sort(function(a, b){
        return a - b;
    });
    return ordenado
}

console.log(ordenaDoMenorAoMaior([3, 2, 1]))

