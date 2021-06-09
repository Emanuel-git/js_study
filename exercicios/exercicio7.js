resolverBhaskara = (ax2, bx, c) => {
    x1ex2 = []
    delta = Math.pow(bx,2) -4 * ax2 * c
    if (delta < 0) {
        return '| O delta é negativo'
    } else {
        x1ex2[0] = ax2 + Math.sqrt(delta) / (2 * ax2)
        x1ex2[1] = ax2 - Math.sqrt(delta) / (2 * ax2)
        return `| x1 = ${x1ex2[0]}\n| x2 = ${x1ex2[1]}`
    }
}

console.log(resolverBhaskara(2, 7, 5))