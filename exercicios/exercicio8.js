const comparaPontuacao = (listaString) => {
    let listaArray = listaString.split(" ").map(e => parseInt(e))
    let recordeAtual = listaArray[0]
    let recordeBatidoXvezes = 0
    let piorPontuacao = listaArray.pop()

    for (let i = 0; i < listaArray.length; i++) {
        if (listaArray[i] > recordeAtual) {
            recordeAtual = listaArray[i]
            recordeBatidoXvezes += 1
        }  
    }

    listaArray.forEach((item, indice) => {
        if (item < piorPontuacao) piorPontuacao = indice + 1
    })
    
    return [recordeBatidoXvezes, piorPontuacao]
}

listaString = "10 20 20 8 25 3 0 30 1"
console.log(comparaPontuacao(listaString))