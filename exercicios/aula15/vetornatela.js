let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

console.log(valores)


console.log(`O valor 7 está na posição ${valores.indexOf(7)}`)
console.log(valores.indexOf(3))
console.log('--------------------')

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

console.log('--------------------')

for(let pos = 0; pos < valores.length;pos++) {
    console.log(`A posição ${pos} tem ${valores[pos]}`)
}

console.log('--------------------')

for(let pos in valores) {
    console.log(valores[pos])
}

