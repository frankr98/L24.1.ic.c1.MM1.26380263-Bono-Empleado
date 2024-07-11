export default class Cl_IBono{
    leerNombre(){
        return prompt("Ingrese el nombre del empleado");
    }
    leerMonto(){
        return prompt("Ingrese el monto de las ventas");
    }
    leerPorcentaje(){
        return prompt("Ingrese el porcentaje del bono");
    }

    reporteBono(n,mv,b){
        return`
        <h1>----BONO PARA EL EMPLEADO---</h1>
        <br> Nombre: ${n}
        <br> Monto de ventas: ${mv}
        <br> Bono: ${b}
        `
    }

    }