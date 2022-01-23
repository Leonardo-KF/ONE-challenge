const criptografar = document.getElementById("criptografar");
const descriptografar = document.getElementById("descriptografar");
const copiar = document.getElementById("copy");
const message = document.getElementById("texto");
const campoResultado = document.getElementById("result-message");

criptografar.addEventListener("click", function(e) {
    e.preventDefault();
    if (!message) {
        alert("Por favor digite uma mensagem")
    }
    
    const texto = message.value.toLowerCase();
    
   
    let fraseCripto = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            fraseCripto += "ai"
        } else if (texto[i] === "e") {
            fraseCripto += "enter"
        } else if (texto[i] === "i") {
            fraseCripto += "imes"
        } else if (texto[i] === "o") {
            fraseCripto += "ober"
        } else if (texto[i] === "u") {
            fraseCripto += "ufat"
        } else {
            fraseCripto += texto[i]
        }
    }
    message.value = ""    
    campoResultado.value = fraseCripto;
})

copiar.addEventListener("click", function(e) {
    e.preventDefault();
    campoResultado.select();
    document.execCommand("cut");
    campoResultado.value = "";
    alert("Messagem copiada com sucesso");
    
})

descriptografar.addEventListener("click", function(e) {
    e.preventDefault();
    if (!message) {
        alert("Por favor digite uma mensagem")
    }
    let texto = message.value.toLowerCase();
    
    message.value = ""

    for(let i = 0; i < texto.length; i++) {
        texto = texto.replace("ai", "a")
        texto = texto.replace("enter", "e")
        texto = texto.replace("imes", "i")
        texto = texto.replace("ober", "o")
        texto = texto.replace("ufat", "u")
    }
   

    campoResultado.value = texto;
    

})