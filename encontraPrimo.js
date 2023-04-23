function encontraPrimo(array) {
  for (let i = 0; i < array.length; i++) {
    let numeroAtual = array[i];
    let primo = true;

    if (numeroAtual < 2) {
      primo = false;
    }

    for (let j = 2; j < numeroAtual; j++) {
      if (numeroAtual % j === 0) {
        primo = false;
        break;
      }
    }

    if (primo) {
      return numeroAtual;
    }
  }

  return null;
}
