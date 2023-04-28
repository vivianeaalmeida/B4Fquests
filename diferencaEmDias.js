function diferencaEmDias(data1, data2) {
    return Math.floor(Math.abs(data2 - data1) / (1000 * 60 * 60 * 24)) 
    //Math.abs para não fazer diferença entre qual data é maior ou menor
}
