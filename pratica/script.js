
function carregar(){
 var msg = window.document.getElementById("msg")
 var img = window.document.getAnimations("imagem")
 var data = new Date()
 var hora = data.getHours()
 msg.innerHTMl = `Agora são ${hora} horas.`


}