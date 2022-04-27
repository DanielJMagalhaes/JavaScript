let num = [2,8,7,4,1]
num.push(1) //serve para adicionar um numero no caso o 1, dependendo da posicao coloca no comeco ou no final do vetor
num.sort() //num.sort() serve para corrigir os numeros em ordem crescente
num.indexOf() //busca o numero indicado dentro do parenteses no vetor
console.log(num)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5) //Nao existe o valor 5, entao ficaria -1
if(pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor esta na posição ${pos}`)
}
