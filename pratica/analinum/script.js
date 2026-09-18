var numero = document.getElementById("n1")
var tabela = document.getAnimations("list")
var res= document.getElementById("res")
var valores = []

function isnumero(n){
 if (Number (n) >= 1 && Number(n) <= 50){
    return true
 } else{
   return false
 }
}

function islista(n, lista){
 if (lista.indexOf(Number(n)) !== -1){
 return true
} else{
    return false
}
}

function adicionar(){
   if (isnumero(numero.value) && !inlist (numero.value)){
 } else{
    alert("[ERRO 404] VALOR NÃO ENCONTRADO OU JÁ ADICIONADO NA LISTA!!!")
 }

  
  }
