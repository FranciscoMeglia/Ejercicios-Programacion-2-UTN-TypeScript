/* Ejercicio - Sueldos

Una empresa desea crear un programa para calcular el sueldo de sus empleados. La fórmula
para calcular el sueldo de un empleado es la siguiente:
sueldo = neto + bonopresentismo + bonoresultado
Los empleados pueden categorizarse en:
Gerente. Sueldo neto 100000
Administrativo. Sueldo neto 40000
Operador. Sueldo neto 10500
Cadete. Sueldo neto 1000
Existen 2 bonos por presentismo.
El bono A asigna:
$1000 si el empleado no faltó nunca.
$450 si el empleado faltó 1 única vez
$0 en cualquier otro caso.
El bono B siempre suma $500 (cero pesos).
El bono por resultados ofrece 3 posibilidades:
10% sobre el sueldo neto en caso de objetivo cumplido
$800 fijos en caso de cumplir el 80& del objetivo
$0 (cero pesos) en cualquier otro caso.
Desarrolle una aplicación que permita calcular el sueldo de un empleado. Pruebe distintos
escenarios */

import { BonoPresentismoA } from "./BonoPresentismo/BonoPresentismoA";
import { BonoResultadoA } from "./BonoResultado/BonoResultadoA";
import { Administrativo } from "./Empleado/Administrativo";

// Por un lado creamos el Empleado
const administrativo = new Administrativo("Francisco Meglia", 850000);

// Por otro seteamos los bonos
administrativo.setBonoPresentismo(new BonoPresentismoA(1));
administrativo.setBonoResultado(
  new BonoResultadoA(70, administrativo.getSueldoNeto())
);

console.log(administrativo.getSueldoFinal());
