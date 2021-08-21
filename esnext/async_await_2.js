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

async function gerarMegaSena(qtdeNumeros) {
    const numeros = [];
    try {
        for(let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros));
        }
        return numeros;
    } catch (e) { 
        throw "Erro!";
    }
    
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log); 