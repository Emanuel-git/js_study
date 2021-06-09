function tipoDeTriangulo(lado1, lado2, lado3) {
    let tipo
    if (lado1 === lado2 && lado1 === lado3) {
        tipo = 'Equilátero'
    } else if (lado1 !== lado2 && lado1 === lado3 || lado1 !== lado3 && lado1 === lado2 || lado2 !== lado3 && lado2 === lado1 || lado2 !== lado1 && lado2 === lado3) {
        tipo = 'Isósceles'
    } else {
        tipo = 'Escaleno'
    }

    console.log(`O triângulo é do tipo ${tipo}`)
}

tipoDeTriangulo(5, 3, 4)