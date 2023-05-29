function arrayFromBigInt(BigInt){
    //let str = BigInt.toString()
    //return Array.from(str)
}

function arrayFromBigInt(bigInt) {
  // Converter o BigInt em uma string
  const str = bigInt.toString();

  // Separar cada dígito da string em um array
  const digits = str.split("");

  // Converter cada dígito em um número
  const result = digits.map(d => parseInt(d));

  return result;
} 
