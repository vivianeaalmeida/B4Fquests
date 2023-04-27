function diferencaEntreDiagonais(matrizquadrada) {

    let diagonalEsq = 0;
    let diagonalDir = 0;

    for(let i = 0; i < matrizquadrada.length; i++){
        diagonalEsq += matrizquadrada[i][i];
        diagonalDir += matrizquadrada[i][matrizquadrada.length - 1 - i]
    }

    return diagonalEsq - diagonalDir
}

/*
1 2 3 [0][0]    [0][2] => array.length - 1 (comprimento do fim do array) e i representa o - 1. Pois subtrai-se 1 no seg indice.
1 2 3 [1][1]    [1][1]    
1 2 3 [2][2]    [2][0]
                i++  i--
*/

//com valor absoluto, fazer Math.abs(Math.abs(diag1) - Math.abs(diag2)
