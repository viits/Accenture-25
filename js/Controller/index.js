class Cell {
  constructor() {
    this._mensagem = document.querySelector("#mensagem");
    this._button = document.querySelector("#enviar");
    this._mostrarMensagem = document.querySelector("#mostrarMensagem");
    this.inicialize();
  }

  inicialize() {
    this._button.addEventListener("click", () => {
      this.getMsg();
      this.clearMsg();
    });
  }

  getMsg() {
    let vetor = [];
    vetor = this._mensagem.value;
    let contador = vetor.length;
    let value = vetor[0];

    var separar = vetor.split("0");
    let mensagem1 = "";
    for (let i = 0; i < separar.length; i++) {
      mensagem1 += this.translateMsg(separar[i], separar[i].length);
    }
    this._mostrarMensagem.innerHTML = `<p>${mensagem1}</p>`;
    console.log(mensagem1);
  }

  clearMsg() {
    this._mensagem.value = "";
  }

  /**
   * @param {*} value  é o valor passado pelo campo
   * @param {*} contador é o índice referente a posição do caractere no grupo de caracteres
   */
  translateMsg(value, contador) {
    let dois = { 1: "A", 2: "B", 3: "C" };
    let tres = { 1: "D", 2: "E", 3: "F" };
    let quatro = { 1: "G", 2: "H", 3: "I" };
    let cinco = { 1: "J", 2: "K", 3: "L" };
    let seis = { 1: "M", 2: "N", 3: "O" };
    let sete = { 1: "P", 2: "Q", 3: "R", 4: "S" };
    let oito = { 1: "T", 2: "U", 3: "V" };
    let nove = { 1: "W", 2: "X", 3: "Y", 4: "Z" };

    let comparar;

    switch (value[0]) {
      case "0":
        comparar = " ";
        break;
      case "1":
        comparar = "";
        break;
      case "2":
        comparar = dois[contador];
        break;
      case "3":
        comparar = tres[contador];
        break;
      case "4":
        comparar = quatro[contador];
        break;
      case "5":
        comparar = cinco[contador];
        break;
      case "6":
        comparar = seis[contador];
        break;
      case "7":
        comparar = sete[contador];
        break;
      case "8":
        comparar = oito[contador];
        break;
      case "9":
        comparar = nove[contador];
        break;
    }
    return comparar;
  }
}
