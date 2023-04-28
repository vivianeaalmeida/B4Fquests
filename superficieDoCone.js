function superficieDoCone(raio, altura){
    let geratriz = Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2));
    let area = Math.PI * raio * (raio + geratriz);
    return area;
}
