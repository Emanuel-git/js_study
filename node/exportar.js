console.log(module.exports)
console.log(module.exports === this) // true
console.log(module.exports === exports) // true

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // muda nada
console.log(module.exports)

exports = { // muda nada também 
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }