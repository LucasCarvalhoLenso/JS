//let é uma variavel q so existe dentro do proprio bloco
function contar() {
let inicio = document.getElementById('txti')
let fim = document.getElementById('txtf')
let passo = document.getElementById('txtp')
let res = document.getElementById('res')
if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = '[ERRO] faltam dados'
    } else {
        res.innerHTML = `contando: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0) {
            alert('[ERRO] considerando passo 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
            for (let c=i; c<=f; c+=p) {
            res.innerHTML += `${c} \u{1f60e}`
        }
        } else {
            //contagem decrescente
            for (let c = i; c>=f; c-= p) {
                res.innerHTML += `${c} \u{1f60e}`
            }
        }
        res.innerHTML += `\u{1f339}`
    }
}