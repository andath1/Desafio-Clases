class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre
        this._impuesto = impuesto
    }
    set nombre(value) {
        this._nombre = value
    }
    get nombre() {
        return this._nombre
    }


    calcularimpu() {
        return ((this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21)
    }
}

export { Cliente }