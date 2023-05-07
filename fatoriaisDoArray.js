function fatoriaisDoArray(array){ //NESSA LÓGICA, O FATORIAL É FEITO, PORÉM NÚMERO DO ARRAY É COLOCADO JUNTO NO ARRAY, E DEPOIS VEM O FATORIAL. ESTÁ ERRADA ESSA PARTE.
    let novoArray = [];
    
    function fatorial(array){
        for(let i = 0; i < array.length; i++){
            let numeroCorrespondente = array[i];
            let fatorial = 1;
            for(let j = 1; j <= numeroCorrespondente; j++){
                fatorial = fatorial * j;
                novoArray.push(fatorial)
            }
        }
        return novoArray;
    }
    fatorial(array);
    return novoArray;
}


console.log(fatoriaisDoArray([1, 2, 3, 4, 5]))
/*OUTPUT NESSA LÓGICA: [
  1,  1,   2,  1, 2, 6,
  1,  2,   6, 24, 1, 2,
  6, 24, 120
]*/
//O ERRO ESTÁ NO ARRAY.PUSH... está fora do lugar. e ai, o número faz push de todo loop. Ao inves do resultado final
