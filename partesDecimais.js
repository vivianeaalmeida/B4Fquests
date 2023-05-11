function partesDecimais(array){
    return array.map(num => Math.floor(num * 100) % 100 / 100);
}
