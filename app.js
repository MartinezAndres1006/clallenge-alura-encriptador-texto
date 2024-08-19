function encriptar() {
  let texto = document.getElementById("texto").value; 
  let textoCifrado = texto
    .replaceAll("a","ai")
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");

  if(texto.length!=0){
    let textoDom= document.getElementById("textoDom");
    textoDom.innerHTML= `${textoCifrado}`;
    let fotoDom= document.getElementById("fotoDom");
    fotoDom.style.display = "none";
    let parrafoDom= document.getElementById("elementoAEliminar");
      parrafoDom.innerText= ' '
    console.log(textoCifrado);
    


  }else{
    let textoDom= document.getElementById("textoDom");
    textoDom.innerHTML= `Ningún mensaje fue encontrado`;
    let parrafoDom= document.getElementById("elementoAEliminar");
    parrafoDom.innerText= 'Ingresa el texto que desees encriptar o desencriptar.';
  }





}

function desencriptar() {
  let texto = document.getElementById("texto").value; 
  let textoDescifrado = texto
    .replaceAll("ai","a")
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");

    if(texto.length!=0){
      let textoDom= document.getElementById("textoDom");
      textoDom.innerHTML= `${textoDescifrado}`;
      let parrafoDom= document.getElementById("elementoAEliminar");
      parrafoDom.innerText= ' '
      let fotoDom= document.getElementById("fotoDom");
      fotoDom.style.display = "none";
  
      console.log(textoCifrado);
      
  
  
    }else{
      let textoDom= document.getElementById("textoDom");
      textoDom.innerText= `Ningún mensaje fue encontrado`;
      let parrafoDom= document.getElementById("elementoAEliminar");
      parrafoDom.innerText= 'Ingresa el texto que desees encriptar o desencriptar.'
  }
  



}
