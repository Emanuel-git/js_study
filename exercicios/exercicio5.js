formatarNaMoedaReal = numero => {
    //return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) // R$ 0,30
    return `R$${numero.toFixed(2).replace('.',',')}` // R$0,30
}

console.log(formatarNaMoedaReal(0.30000000000000004))