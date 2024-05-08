function calcularAhorro (montoInicial, ahorroMensual , time) {
    let acumuladoTotal, plazoFijo
    acumuladoTotal = plazoFijo = (parseInt(montoInicial))
    
    for (let i = 1; i <= time; i++) {
        acumuladoTotal = acumuladoTotal + parseInt(ahorroMensual)
        plazoFijo = (plazoFijo + parseInt(ahorroMensual)) * 1.0575
        console.log("Mes " + i + " llevas ahorrado: $ " + plazoFijo.toFixed(2) + " 👏 versus $ " + acumuladoTotal.toFixed(2) + " 👎" )
    }

} 


function recopilarDatos() {
    let montoInicial = prompt("Ingresa el monto con el que inicias tu plan de ahorro:")
    let ahorroMensual = prompt("Ingresa el monto mensual que destinaras al ahorro:")
    let time = prompt("Ingresa los meses de duración:")

    if (montoInicial >= 0 && ahorroMensual >= 0 && time >= 1 && time <= 48 ) {
        calcularAhorro (montoInicial, ahorroMensual, time)
    } else {
        console.warn ("⚠️ ATENCION Los datos ingresados no son válidos")
    }
}
