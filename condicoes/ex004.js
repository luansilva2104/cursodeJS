var agora = new Date() //pegando a hora atual do notebook
var hora = agora.getHours()
console.log("Agora é " +hora+ " Horas.")

if(hora >= 6.30 && hora < 12.30) {
    console.log("bom dia flor dia!")
} else if (hora >= 12.30 && hora < 18.30) {
    console.log("Boa tarde, o dia está lindo hj.")
} else if (hora >= 18.3) {
    console.log("Boa noite, dorme bem e até amanhã.")
} else if (hora >= 1 && hora <= 6.29){
    console.log("Já está de madrugada.")
    
} //else if