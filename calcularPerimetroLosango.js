function perimetroDoLosango(diagonalMaior, diagonalMenor) {
  const lado = 0.5 * Math.sqrt(Math.pow(diagonalMaior, 2) + Math.pow(diagonalMenor, 2));
  const perimetro = 4 * lado;
  return perimetro;
}
