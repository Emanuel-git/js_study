function gerarNumerosEntre(min, max, tempo) {
    min > max ? [max, min] = [min, max] : false
    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const random = parseInt(Math.random() * fator) + min
            resolve(random)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

gerarVariosNumeros().then(console.log)