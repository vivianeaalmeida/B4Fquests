function somaQuadradosAteN(n){
    let valorAtual = 0;
    for(let i = 0; i <= n; i++){
        valorAtual  += i * i;
    }
    return valorAtual;
}

//2 = 2 * 2 || 1 * 1
//5 = 5 * 5 || 4 * 4 || 3 * 3 || 2 * 2 || 1 * 1

//n * n
