function calcularAhorro (montoInicial, ahorroMensual , time) {
    let acumuladoTotal, plazoFijo
    acumuladoTotal = plazoFijo = (montoInicial)
    
    for (let i = 1; i <= time; i++) {
        acumuladoTotal = acumuladoTotal + ahorroMensual
        plazoFijo = (plazoFijo + ahorroMensual) * 1.0575
        console.log("Mes " + i + " llevas ahorrado: $ " + plazoFijo.toFixed(2) + " 👏 versus $ " + acumuladoTotal.toFixed(2) + " 👎" )
    }
} 

function recopilarDatos() {
    let montoInicial = parseFloat(prompt("Ingresa el monto con el que inicias tu plan de ahorro:"))
    let ahorroMensual
    let time

    if (isNaN(montoInicial) || montoInicial < 0) {
        console.error("👉 Por favor ingrese un monto inicial válido")
    } else {
        ahorroMensual = parseFloat(prompt("Ingresa el monto mensual que destinaras al ahorro:"))
        if (isNaN(ahorroMensual) || ahorroMensual < 0) {
            console.error("👉 Por favor ingrese un monto mensual válido")
        } else {
            time = parseInt(prompt("Ingresa los meses de duración:"))
            if (isNaN(time) || time < 0) {
                console.error("👉 Por favor informe correctamente los meses de duración")
            } else {
                calcularAhorro(montoInicial, ahorroMensual, time)
            }
        }
    }
}

