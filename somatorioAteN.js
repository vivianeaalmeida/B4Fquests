function somatorioAteN(n){

    let somaTotal = 0;
    
    for(let i = 0; i <= n; i++){
        valorAtual = i;
        somaTotal += valorAtual;
    }
    return somaTotal;

}

console.log(somatorioAteN(4))
