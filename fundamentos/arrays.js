const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // retorna undefined pois o indice 4 não está definido

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // tira o último elemento da array e retorna ele
delete valores[0]
console.log(valores)

console.log(typeof valores) // object