function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    var min = data.getMinutes()
    msg.innerHTML = `Neste exato momento são ${hora}:${min}h`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#dbc0a5'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#adae9e'
    } else {
        // Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#012325' 
    }
}
