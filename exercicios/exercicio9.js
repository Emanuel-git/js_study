const sistemaDeNota = nota => {
    if (nota >= 40) return `| Nota: ${nota} \n| Status: Aprovado`
    else if (nota > 37) {
        nota2 = nota.toString().split("")
        if (parseInt(nota2[1]) < 5) {
            proxMultDe5 = parseInt(nota2[0] + "5")
            if ((proxMultDe5 - nota) < 3) return `| Nota: ${nota + (proxMultDe5 - nota)} \n| Status: Aprovado`
            else return `| Nota: ${nota} \n| Status: Reprovado`
        }
        else {
            proxMultDe5 = parseInt(parseInt(nota2[0]) + 1 + "0")
            if ((proxMultDe5 - nota) < 3) return `| Nota: ${nota + (proxMultDe5 - nota)} \n| Status: Aprovado`
            else return `| Nota: ${nota} \n| Status: Reprovado`
        }
    }
    else {
        return `| Nota: ${nota} \n| Status: Reprovado`
    }
}

console.log(sistemaDeNota(37))