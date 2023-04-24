function arrayDeNAZero(n){
    if (n === 0) {
        return [0]
    }
   return [n].concat(arrayDeNAZero(n-1))

}