export default class Cl_Bono{
    constructor(nombre, montoVentas, porcentaje){
        this.nombre = nombre;
        this.montoVentas = montoVentas;
        this.porcentaje = porcentaje;
    }

    set nombre (n){
        this._nombre = n;
    }
    get nombre (){
        return this._nombre;
    }

    set montoVentas (mv){
        this._montoVentas = +mv;
    }
    get montoVentas (){
        return this._montoVentas;
    }

    set porcentaje (p){
        this._porcentaje = +p;
    }
    get porcentaje (){
        return this._porcentaje;
    }

    bono(){
        return (this.montoVentas * this.porcentaje) / 100;
    }
}