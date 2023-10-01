let num = [5, 6, 2, 7, 3]
num[5] = 1
num.push(4)
let tamanho = num.length
console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`O tamanho do vetor é de ${tamanho} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)
console.log(`Nosso vetor em ordem crescente é: ${num.sort()}`)

let pos = num.indexOf(5)
if (pos == -1) {
    console.log('Erro. O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
