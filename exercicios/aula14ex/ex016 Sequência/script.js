function contar() {
    var inicio = document.getElementById('txtin')
    var fim = document.getElementById('txtfim')
    var pass = document.getElementById('txtpass')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = ('Impossivel contar! Revise os dados')
        
    } else if (inicio.value == 0 && fim.value == 0 && pass.value == 0) {
        res.innerHTML = ('Verifique os dados e tente novamente')

    } else if (pass.value.length == 0) {
        alert('ERRO. Dados inválidos')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(var c = i; c <= f; c += p ) {
                res.innerHTML += `${c} \u{1F449} `  // U+1F601 Emoji , troca o U+ por \n{}
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }

}