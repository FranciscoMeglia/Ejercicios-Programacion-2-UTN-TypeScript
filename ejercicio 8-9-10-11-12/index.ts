/* 8. Crear una clase Persona que tenga los atributos privados nombre y apellido, con sus setters y
getters.
● Crear una clase llamada Visitante con los mismos atributos.
● Crear una clase Guardia con los mismos atributos.
● Crear una instancia de cada una de las clases y asignarle valores.
● Mostrar por pantalla los valores.

9. Crear una clase Persona que tenga los atributos privados nombre y apellido, con sus setters y
getters.
● Crear una clase llamada Visitante que extienda de Persona.
● Crear una clase Guardia que extienda de Persona.
● Crear una instancia de cada una de las clases y asignarle valores.
● Mostrar por pantalla los valores; estudiar las ventajas del uso de la herencia.

10. Continuando con el ejemplo anterior, realizar las siguientes modificaciones:
● Agregar en Persona el método presentarse() que devuelva nombre y apellido de la
persona.
● Crear una instancia de cada una de las clases y asignarle valores.
● Mostrar por pantalla los valores.
● Sobreescribir el método presentarse() en la clase Guardia de modo tal que devuelva el
siguiente mensaje “Hola, mi nombre es <nombre y apellido> y soy el guardia.” Donde
<nombre y apellido> debe ser reemplazado por el nombre y apellido del guardia.
4
● Mostrar por pantalla el resultado de invocar el método presentarse() y advertir que la
implementación en la clase Guardia tiene precedencia sobre la de su padre.

11. Continuando con el ejemplo anterior, realizar las siguientes modificaciones:
● Agregar en Visitante el atributo privado dni (numérico) con sus setters y getters
correspondientes.
● Agregar en Guardia el método público controlarDocumento() que reciba como
parámetro el dni de la persona y devuelva el mensaje “Adelante persona con dni <dni>”
donde <dni> es el valor recibido por parámetro.
● Crear una instancia de cada una de las clases y asignarle valores.
● Mostrar por pantalla los valores.

12. Continuando con el ejemplo anterior, realizar las siguientes modificaciones:
● Modificar la clase Guardia para que el método público controlarDocumento() devuelva
el mensaje “Adelante <nombre completo del visitante> con dni <dni>” reemplazando
respectivamente con el nombre completo del visitante y su dni.
● Crear una instancia de cada una de las clases y asignarle valores.
● Mostrar por pantalla los valores.
● Analizar si es posible pasar un único parámetro al método controlarDocumento() y
estudiar las ventas y desventajas que tendría asociado. */

import { Guardia } from "./Guardia";
import { Visitante } from "./Visitante";

const guardia1 = new Guardia("Federico", "Meglia");
const visitante1 = new Visitante("Francisco", "Meglia", 46095024);
