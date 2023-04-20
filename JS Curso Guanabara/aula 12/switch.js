// switch bom pra testar numeros especificos e if pra intervalo de numero
var agora = new Date()
var diasem = agora.getDay()
/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/
console.log(diasem)
switch(diasem) {
    case 0:
    console.log('Hoje é domingo.')
    break

    case 1:
    console.log('Hoje é segunda.')
    break

    case 2:
    console.log('Hoje é terça.')
    break

    case 3:
    console.log('Hoje é quarta.')
    break

    case 4:
    console.log('Hoje é quinta.')
    break

    case 5:
    console.log('Hoje é sexta')
    break

    case 6:
    console.log('Hoje é sábado')
    break

    default:
    console.log('[ERRO] DIA ÍNVALIDO')
    break
}