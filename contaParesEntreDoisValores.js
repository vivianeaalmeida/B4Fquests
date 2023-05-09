function contaParesEntreDoisValores(valor1, valor2){
    let valor1Contra = 0;
    let valor2Contra = 0;

    if(valor1 === valor2){
        return "Por favor introduza dois valores diferentes."
    }
    if(valor2 < valor1){
        valor1Contra = valor2;
        valor2Contra = valor1
    } else {
        valor1Contra = valor1;
        valor2Contra = valor2;
    }

    let count = 0;
    for(let i = valor1Contra; i <= valor2Contra; i++){
        if(i % 2 == 0){
            count++;
        }
    }
    return count;
}
