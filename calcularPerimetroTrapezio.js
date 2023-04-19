function calcularPerimetroTrapIsosceles(baseMaior, baseMenor, altura) {
  const lado = 
	Math.sqrt(Math.pow((baseMaior - baseMenor) / 2, 2) + Math.pow(altura, 2));
  const perimetro = baseMaior + baseMenor + 2 * lado;
  return perimetro;
}
