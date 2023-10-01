let num = document.getElementById('txtnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar () {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // ! quer dizer não, se ele não esta na lista
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

         
        
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // Para limapr o número da caixa de números
    num.focus()    // Ficar piscando para inserir o número
            
}

function finalizar() {
    if (valores.length == 0) {
        alert('Erro. Você precisa adicionar números')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]

            if (valores[pos] < menor)
                menor = valores[pos]

        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número é ${maior}.</p>`
        res.innerHTML += `<p>O menor número é ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os números, temos ${soma}. </p>`
        res.innerHTML += `<p>A média de todos os número é: ${media}</p>`

    }

}