
function carregar(){
 var msg = window.document.getElementById("msg")
 var img = window.document.getElementById("imagem")
 var data = new Date()
 var hora = data.getHours()
 msg.innerHTML = `Agora são ${hora} horas tenha<p>`

 if (hora >= 6 && hora < 12){
    msg.innerHTML += "BOM DIA!"
    img.src= 'imagens/redondomanha.png'
    document.body.style.background = 'yellow'
 } 
 else if (hora >= 12 && hora <= 18){
    msg.innerHTML += "BOA TARDE!"
    img.src= 'imagens/redondotarde.png'
     document.body.style.background = 'orange'
 } else if (hora > 18 && hora < 24 ){
    //BOA NOITE!
    msg.innerHTML += "BOA NOITE!"
    img.src= 'imagens/redondonoite.png'
      document.body.style.background = 'black'
 } else {
    msg.innerHTML += "Está de madrugada, recomendo você dormir!<p>"
    msg.innerHTML += "ASS: BB NEYMAR"
    img.src= 'imagens/bbm copy.png'
      document.body.style.background = 'black'
 }
}