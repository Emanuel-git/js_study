montanteJurosSimples = (capitalInicial, taxaDeJuros, tempoDeAplicação) => capitalInicial * taxaDeJuros * tempoDeAplicação
montanteJurosCompostos = (capitalInicial, taxaDeJuros, tempoDeAplicação) => Math.pow(capitalInicial * (taxaDeJuros + 1), tempoDeAplicação)

console.log(`| Juros simples: ${montanteJurosSimples(1300,10,3)}\n| Juros Compostos: ${montanteJurosCompostos(1300,10,3)}`)