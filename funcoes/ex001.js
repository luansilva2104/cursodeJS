
/*function parimp(n){
    if (n % 2 == 0){
        return "Par"
    } else {
        return "Impar"
    }
} 
var res = parimp(3) 
console.log(res)*/

var preco = 5.50
function compraLeite(valor){
  if(valor >= preco){
    return "Leite comprado"
  } else{
    return "Dinheiro insuficiente"
  }
}
console.log(compraLeite(valor = 5.55))

function chamada(n1=0, n2=0){
    return n1 + n2 
   }console.log(chamada(4))

