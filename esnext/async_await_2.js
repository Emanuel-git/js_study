function gerarNumerosEntre(min, max, numerosProibidos) {
    min > max ? [max, min] = [min, max] : false
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const random = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(random)) {
            reject('Número repetido!')
        } else {
            resolve(random)
        }
    })
}

function gerarMegaSena(qtdeNumeros) {
    
}

gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)