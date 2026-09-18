console.log("----------Array----------\n")

var num = [5, 8, 4]
num [3] = 6 //add o número 6 a espaço de número 4 da array
num.push(7) //add o número 7 a último espaço da array
num.length //comprimento do vetor
num.sort() //pega os valores e colocar em ordem crescente

for(var pos in num ){   //in percorre os indices da var num
    console.log(num[pos]) //acesso a os valores
}
