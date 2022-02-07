class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual
        this._deducciones = deducciones
    }
    set montoBrutoAnual(value) {
        this._montoBrutoAnual = value
    }
    get montoBrutoAnual() {
        return this._montoBrutoAnual
    }

    set deducciones(value) {
        this._deducciones = value
    }
    get deducciones() {
        return this._deducciones
    }

}

export { Impuesto }