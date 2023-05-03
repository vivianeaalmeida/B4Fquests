function diaDaSemanaPorExtenso(data){
    dia = data + 1;
    dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
    return dias[dia];
} 

console.log(diaDaSemanaPorExtenso(2))

//no caso, no ex é utilizado o getDay() + 1
