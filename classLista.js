class Lista {
  #primeiro;

  constructor(elemento) {
    this.#primeiro = elemento ? elemento : undefined;
  }

  insereNoInicio(elemento) {
    elemento.proximo = this.#primeiro;
    this.#primeiro = elemento;
  }

  get primeiro() {
    return this.#primeiro;
  }
}

class ElementoDaLista {
  #dados;
  #proximo;
  constructor(dados, proximo) {
    this.#dados = dados;
    this.#proximo = proximo;
  }

  get dados() {
    return this.#dados;
  }

  get proximo() {
    return this.#proximo;
  }

  set proximo(elemento) {
    this.#proximo = elemento;
  }

  get eUltimo() {
    return Boolean(!this.#proximo);
  }
}
