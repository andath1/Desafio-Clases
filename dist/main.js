"use strict";

var _cliente = require("./cliente.js");

var _impuestos = require("./impuestos.js");

var impuestoUno = new _impuestos.Impuesto();
impuestoUno.montoBrutoAnual = 1000000;
impuestoUno.deducciones = 2000;
var cliente1 = new _cliente.Cliente("Andres", impuestoUno);
var resultadoCliente1 = cliente1.calcularimpu();
console.log(resultadoCliente1);
/* console.log(cliente1)
console.log(Impuesto) */

/* 

Cliente.prototype.buscarCliente = function(nombre) {
    return this.cliente.find((nom) => nom.nombre.toLowerCase() === nombre.toLowerCase()) || "No encontrado"
}




console.log(cliente1)
console.log(cliente2) */