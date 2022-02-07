import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuestos.js";


const impuestoUno = new Impuesto()
impuestoUno.montoBrutoAnual = 1000000
impuestoUno.deducciones = 2000

const cliente1 = new Cliente("Andres", impuestoUno)
const resultadoCliente1 = cliente1.calcularimpu()
console.log(resultadoCliente1)




/* console.log(cliente1)
console.log(Impuesto) */




/* 

Cliente.prototype.buscarCliente = function(nombre) {
    return this.cliente.find((nom) => nom.nombre.toLowerCase() === nombre.toLowerCase()) || "No encontrado"
}




console.log(cliente1)
console.log(cliente2) */