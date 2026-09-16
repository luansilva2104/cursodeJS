function gerar(){
   var num = document.getElementById("n1")
   var tab = document.getElementById("seltab")
 
if (num.value.length == 0){
   tab.innerHTML = ""
   tab.style.display = "none"//some a opção onde fica a tabuada
   window.alert("[ERRO] POR FAVOR DIGITE UM NÚMERO")
 } else {
    var n = Number(num.value)
    tab.style.display = "block" //mostra a lista da tabuada do número digitado de novo
    tab.innerHTML = "" //Limpa a tabuada

    var c = 1
    while (c <= 10){
        var item = document.createElement("Option") //Cria elementos option via js
       item.text = `${n} x ${c} = ${n*c}` //fazendo as contas da da tabuada
       item.value = `tab${c}` //Sabe o item selecionado
       tab.appendChild(item) //adiciona número da tabuada na tabela
       c++
    }
  }
}

function limparTabuada(){
   var num = document.getElementById("n1")
   var tab = document.getElementById("seltab")

   if (num.value.length == 0){
      tab.innerHTML = ""
      tab.style.display = "none"
   }
}
