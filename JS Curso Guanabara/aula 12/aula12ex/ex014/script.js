function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `agora são ${hora}:${minuto}`
    if (hora >= 0 && hora <= 12) {
        img.src = 'manha.png'
        document.body.style.background = '#fdc662'
    } else if (hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#c64a02'
    }else {
        img.src = 'noite.png'
        document.body.style.background = '#062a40'
    }
}