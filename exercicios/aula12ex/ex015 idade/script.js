function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Erro. Digite seus dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade >= 10 && idade <= 25) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade > 25 && idade <= 65) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else if (idade > 65) {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-crianca-f.png')
            } else if (idade >= 10 && idade <= 25) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade > 25 && idade <= 65) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else if (idade > 65) {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}