
//-----------------------------Switch com números inteiros------------------------------

var agora = new Date()
var diaSem = agora.getDay() //peguando o dia da semana da máquina
console.log("Dia da semana.")

switch(diaSem) {
    case 0:
        console.log("Domingo\n")
        break
    case 1: 
       console.log("Segunda\n")
       break
    case 2:
        console.log("Terça\n")
        break
    case 3:
        console.log("Quarta\n")
        break
    case 4:
        console.log("Quinta\n")
        break
    case 5:
        console.log("Sexta\n")
        break
    case 6: 
        console.log("Sábado\n")
        break
    default:
        console.log("[ERRO] DIA INVÁLIDO!")
        break

}

//------------------------------Switch com string------------------------------

console.log("Local da sua máquina.")
var local = Intl.DateTimeFormat().resolvedOptions().locale //peguando a região em que minha máquina está config

switch (local){
    case "pt-BR":
        console.log("Sua máquina está em " +local)
        break
    case "en-US":
        console.log("Sua máquina está em " +local)
        break
    case "es-ES":
        console.log("Sua máquina está em " +local)
        break
    case "zh-Cn": 
       console.log("Sua máquina está em " +local)
       break
    default:
        console.log("[ERRO] LOCAL INVÁLIDO")
}