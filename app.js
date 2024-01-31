const inputText  = document.querySelector('.inputText');
const outputText = document.querySelector('.outputText');
const infoContent = document.querySelector('.info-content');
const onEncoder = document.querySelector('.encoderBtn');
const onDecoder = document.querySelector('.decoderBtn');


onEncoder.addEventListener("click", () => {
  
  let message = inputText.value;
  let info = infoContent;
  let outputMessage = outputText;

  if ( !message ) { 
    alert( "Escribe un mensaje" )
    location.reload();
  };
  
  const encodedMessage = encriptar( message );

  info.classList.add("hidden")

  inputText.value = "";

  outputMessage.innerText = encodedMessage;
  
  // messageContainer.append( outputMessage.inputText = encodedMessage )
  
})

onDecoder.addEventListener("click", () => {
  
  let message = outputText.innerHTML;
  let outputMessage = outputText;

  if ( !message ) { 
    alert( "Escribe un mensaje" )
  };
  
  const decodedMessage = desencriptar( message );

  outputMessage.innerText = decodedMessage;

})


function encriptar(text) {

  let codedMsg = [];

  for (let i = 0; i < text.length; i++) {

    const element = text[i].toLowerCase(); //si detecta mayuscula se settea a minuscula

    if (element == "a") {
      codedMsg.push("ai")
    } else if (element == "e") {
      codedMsg.push("enter")
    } else if (element == "i") {
      codedMsg.push("imes")
    } else if (element == "o") {
      codedMsg.push("ober")
    } else if (element == "u") {
      codedMsg.push("ufat")
    } else if (element == " ") {
      codedMsg.push(" ")
    } else {
      codedMsg.push(element)
    }

  }

  return codedMsg.toString().replace(/,/g, ''); //regex para eliminar las 'comas'

}

function desencriptar(text) {

  let decodedMsg = text
    .replace(/ai/gi,    "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi,  "i")
    .replace(/ober/gi,  "o")
    .replace(/ufat/gi,  "u")

  return decodedMsg;
}

