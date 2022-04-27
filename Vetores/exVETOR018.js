let val = [3,8,6,7,2]
val.sort()
/*
for(let pos=0; pos < val.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${val[pos]}`)
}
*/
for(let pos in val ){
    console.log(`A posicao ${pos} tem o valor ${val[pos]}`)
}