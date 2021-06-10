const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('Angular', { framework: true })

console.log(tecnologias.react) // forma errado, retorna undefined
console.log(tecnologias.get('react').framework) // forma certa

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // substitui o de cima
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)