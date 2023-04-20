let num = document.getElementById('numero')
let lista = document.getElementById('caixa')
let res = document.getElementById('resultado')
var valores = []
function isNumero(n) {
    if(Number(n)>=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function analisar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        alert('[ERRO] INSIRA UM VALOR VALIDO')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {

    }else{
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let pos in valores){
            soma+=valores[pos]
            if (valores[pos] > maior)
            maior=valores[pos]
            if (valores[pos]<menor)
            menor = valores[pos]
        }
        valores.sort()
        res.innerHTML = ''
        res.innerHTML += `<p>O menor numero é ${menor}</p>`
        res.innerHTML += `<p>O maior numero é ${maior}</p>`
        res.innerHTML += `<p>Tem ${valores.length} Numeros</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${soma / valores.length}`
        
        }
    }