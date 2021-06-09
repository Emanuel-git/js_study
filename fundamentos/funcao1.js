// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // o segundo valor vai como undefined, o resultado será um retorno de NaN
imprimirSoma(2, 10, 4 ,5, 6, 7, 8) // ele não retorna erro, apenas ignora os parametros extras
imprimirSoma() // retorna NaN

//função com retorno
function soma(a, b = 0) { // b está indo com um valor padrão, caso ele não seja inserido
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())