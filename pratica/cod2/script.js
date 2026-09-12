function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    // fano.value.length da linha 8 é para pegar o número de caractere digitado pela pessoa
    if (fano.value.length == 0 || fano.value > ano) {
        alert("***************[ERRO] Verifique os dados!***************")
    } else {
        var fsex = document.getElementsByName("radsex")   //buscando os campos de sexo
        var idade = ano - Number(fano.value)             //calcula a idade subtraindo o ano de nascimento do ano atual
        var genero = ""                                 //var vazia pra guarda H ou M
        var img = document.createElement("img")        // cria uma nova tag img para exibirm a foto
        img.setAttribute('id', 'foto')                //criando a tag e etc para add foto pelo js
        
        if (fsex[0].checked){
            genero = "Homem"
             if (idade >= 0 && idade < 10) {
                clasificacao = 'Criança'
               img.setAttribute('src', 'imagens2/bbm.png')
            } else if (idade >= 10 && idade < 21) {
                clasificacao = "jovem"
               img.setAttribute('src', 'imagens2/jovemm.png')
            } else if (idade < 50){
                clasificacao = "Adulto"
                img.setAttribute('src', 'imagens2/adultom.png')
            } else {
                clasificacao = "Idoso"
                img.setAttribute('src' , 'imagens2/idosom.png')
            } 
            } else if(fsex[1].checked) {
         genero = "Mulher"
         if (idade >= 0 && idade < 10) {
                clasificacao = "criança"
                img.setAttribute('src', 'imagens2/bbf.png')
            } else if (idade >= 10 && idade < 21) {
                clasificacao = "Jovem"
                img.setAttribute('src', 'imagens2/jovemf.png')
            } else if (idade < 50){
                clasificacao = "Adulta"
            } else {
                clasificacao = "Idosa"
                img.setAttribute('src', 'imagens2/idosof.png')
            }
        
        }
        res.style.textAlign = "center" //centralizar texto pelo js
        res.innerHTML = "<strong>Detectamos " +genero+ " com " +idade+ " Ano.<p> Você é " +clasificacao+ "</strong>"       
        res.appendChild(img) //adiciona a imagem criada (img) dentro do elemento res.
    }
}