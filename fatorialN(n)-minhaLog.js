/*function fatorialN(n){

    let i = 1;
    let fatorial;
//1 <= 5
    while (i <= n){
        fatorial = n * (n - i);
        i++;
    }
    return fatorial
}

console.log(fatorialN(5));

*/

function factorialize(n) {
 let fatorial = n;
  if (n === 0 || n === 1) 
    return 1; 
  while (n > 1) { 
    n--;
    fatorial = fatorial * n;
  }
  return fatorial;
}
console.log(factorialize(5));


/*

fatorial(5) = 5 * 4 * 3 * 2 * 1

5 - 1 (n - 1)
4 - 1
3 - 1
2 - 1
1

(5)
5 * 5 - 1
n * n - 1
*/
