const criptografar = document.getElementById("criptografar");
const descriptografar = document.getElementById("descriptografar");
const copiar = document.getElementById("copy");
const message = document.getElementById("texto");
const campoResultado = document.getElementById("result-message");

criptografar.addEventListener("click", function (e) {
  e.preventDefault();
  if (!message.value) {
    alert("Por favor digite uma mensagem");
  }

  const texto = message.value.toLowerCase();

  if (
    texto.indexOf("ufat") !== -1 ||
    texto.indexOf("imes") !== -1 ||
    texto.indexOf("enter") !== -1 ||
    texto.indexOf("ober") !== -1 ||
    texto.indexOf("ai") !== -1
  ) {
    alert("Essa mensagem ja esta criptograda, tente descriptografar");
  } else {
    let fraseCripto = "";

    for (let i = 0; i < texto.length; i++) {
      if (!isNaN(texto[i])) {
        throw alert("A Mensagem esta invalida, por favor tente novamente");
      } else if (texto[i] === "a") {
        fraseCripto += "ai";
      } else if (texto[i] === "e") {
        fraseCripto += "enter";
      } else if (texto[i] === "i") {
        fraseCripto += "imes";
      } else if (texto[i] === "o") {
        fraseCripto += "ober";
      } else if (texto[i] === "u") {
        fraseCripto += "ufat";
      } else {
        fraseCripto += texto[i];
      }
    }
    message.value = "";
    campoResultado.value = fraseCripto;
  }
});

copiar.addEventListener("click", function (e) {
  e.preventDefault();
  campoResultado.select();
  document.execCommand("cut");
  campoResultado.value = "";
  alert("Messagem copiada com sucesso");
});

descriptografar.addEventListener("click", function (e) {
  e.preventDefault();
  if (!message) {
    alert("Por favor digite uma mensagem");
  }
  let texto = message.value.toLowerCase();



  if (
    (texto.indexOf("ufat") !== 1) &
    (texto.indexOf("imes") !== 1) &
    (texto.indexOf("enter") !== 1) &
    (texto.indexOf("ober") !== 1) &
    (texto.indexOf("ai") !== 1)
  ) {
    alert("Essa mensagem ja esta descriptografada, tente criptografar");
  } else {
    message.value = "";

    for (let i = 0; i < texto.length; i++) {
      if (!isNaN(texto[i])) {
        throw alert("A Mensagem esta invalida, por favor tente novamente");
      }
      texto = texto.replace("ai", "a");
      texto = texto.replace("enter", "e");
      texto = texto.replace("imes", "i");
      texto = texto.replace("ober", "o");
      texto = texto.replace("ufat", "u");
    }
    campoResultado.value = texto;
  }
});
