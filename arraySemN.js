function arraySemN(n, array){
    let filtro = array.filter(function(value){
        return value != n;
    })
    return filtro;
}