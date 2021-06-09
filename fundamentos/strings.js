const escola = "Cod3r"

console.log(escola.charAt(4)) // pega o caractere no indice
console.log(escola.charAt(5)) // não retorna erro
console.log(escola.charCodeAt(3)) // pega o valor do caractere na tabela ASCII
console.log(escola.indexOf('3')) // retorna o indice deste caractere

console.log(escola.substring(1)) // a partir do indice 1 
console.log(escola.substring(0,3)) // a partir do indice 0 até o 3, porém não inclui o indice 3

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + (escola) + '!')
console.log(escola.replace(3, 'e')) // substitui o 3 pela letra 'e'

console.log('Ana,Maria,Pedro'.split(',')) // cria uma array separando os dados por virgula