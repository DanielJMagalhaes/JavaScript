var agora = new Date
var minuto = agora.getMinutes()
var hora = agora.getHours()
var data = agora.getDate()
var mes = agora.getMonth()
console.log(`Hoje é dia ${data}/${mes}`)
console.log(`Agora são extamente ${hora}:${minuto}.`)
if(hora < 12) {
    console.log('Bom dia')
} else if(hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}
