function verificaPalindromo(string) {
    let indiceCentral = string.length / 2
    let primeiraMetade = ""
    let segundaMetade = ""

    for (let i = 0; i <= indiceCentral; i++) {
        primeiraMetade += string[i]
    }
    for (let i = string.length - 1; i >= indiceCentral - 1; i--) {
        segundaMetade += string[i]
    }
    return primeiraMetade.toLowerCase() === segundaMetade.toLowerCase()
}

console.log(verificaPalindromo("arara"))
