function paraCada(array, funcao) {
    for (indice in array) {
        funcao(array[indice], indice, array)
    }
}

const arrayTeste = ['Teste1', 'Teste2', 'Teste3', 'Teste4']

paraCada(arrayTeste, console.log())