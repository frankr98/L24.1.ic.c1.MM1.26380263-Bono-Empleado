/**análisis
 * crear un programa que calcule el bono para un empleado en función de sus ventas
 */
import Cl_IBono from "./Cl_IBono.js";
import Cl_Bono from "./Cl_Bono.js";

let IBon = new Cl_IBono(),
    n = IBon.leerNombre(),
    mv = IBon.leerMonto(),
    p = IBon.leerPorcentaje(),

    Bon = new Cl_Bono(n, mv, p),
    salida = document.getElementById("salida")
    salida.innerHTML = IBon.reporteBono(Bon.nombre, Bon.montoVentas, Bon.bono())