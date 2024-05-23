const monedas = [
    { identificador: 1, moneda: "pesos", interes: 1.05},
    { identificador: 2, moneda: "dólares", interes: 1.005}
]

function calcularAhorro (monedaElegida, montoInicial, ahorroMensual , time) {
    let meses = [];
    let plazoFijo = montoInicial;
    let tradicional = montoInicial;
    
    for (let i = 1; i <= time; i++) {
        tradicional += ahorroMensual;
        plazoFijo = (plazoFijo + ahorroMensual) * monedaElegida.interes;
        
        let mesActual = {
            numeroMes: i,
            ahorroPlazoFijo: plazoFijo.toFixed(2),
            ahorroTradicional: tradicional.toFixed(2),
        }
        meses.push(mesActual)
    }

    let ultimoMes = meses[meses.length - 1];
    let ahorroPlazoFijo = ultimoMes.ahorroPlazoFijo;
    let ahorroTradicional = ultimoMes.ahorroTradicional;

    console.log("Con tu Plazo Fijo en " + `${monedaElegida.moneda}` + " has obtenido: ", + ahorroPlazoFijo + " 👏 ");
    console.log("Ahorro tradicional: ", + ahorroTradicional  + " 👎 ");

    let detalleMensual = confirm("¿Deseas cononer el detalle mensual?")
    
    if (detalleMensual ) {
        console.table(meses)
    } else {
        console.log("Gracias por visitarnos")
    }
} 

function recopilarDatos() {
    console.table(monedas)
    let monedaElegida = {}
    let identificador = parseInt(prompt("Ingresa el número identificador de la moneda elegida"))
    let montoInicial 
    let ahorroMensual
    let time

    monedaElegida = monedas.find((moneda)=> moneda.identificador === identificador)

    if (monedaElegida === undefined) {
        console.error("👉 Por favor ingrese un número identificador válido.");
    } else {
        montoInicial = parseFloat(prompt("Ingresa el monto con el que inicias tu plazo fijo:"));

        if (isNaN(montoInicial) || montoInicial < 0) {
            console.error("👉 Por favor ingrese un monto inicial válido.");
        } else {
            ahorroMensual = parseFloat(prompt("Ingresa el monto mensual que destinarás al plazo fijo:"));

            if (isNaN(ahorroMensual) || ahorroMensual < 0) {
                console.error("👉 Por favor ingrese un monto mensual válido.");
            } else {
                time = parseInt(prompt("Ingresa los meses de duración:"));

                if (isNaN(time) || time < 0) {
                    console.error("👉 Por favor informe correctamente los meses de duración.");
                } else {
                    calcularAhorro(monedaElegida, montoInicial, ahorroMensual, time);
                }
            }
        }
    }
}

recopilarDatos()
