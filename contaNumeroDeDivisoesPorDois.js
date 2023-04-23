function contaNumeroDeDivisoesPorDois(n){
    let count = 0;
    
    while(n > 1){
       n = Math.floor(n / 2);
       count++;
    }
    return count;
}
/* Com Loop FOR
function contaNumeroDeDivisoesPorDois(n){

    let count = 0;
    
    for(let i = n; i >= 1; i = Math.floor(i / 2)){
       count++;
    }
    return count;
}
*/
