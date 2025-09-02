/* 4. Crear una clase Cine que tenga los atributos privados película y horario:
● Crear métodos públicos para la asignación y recuperación de valores.
● Crear un método público obtenerCartelera() que devuelva el nombre de la película y el
horario.
● Crear una instancia y asignarle valores.
● Mostrar por pantalla los valores.

5. Crear una clase Cine que tenga los atributos privados película y horario.
● Crear métodos públicos para la asignación y recuperación de valores.
● Crear una instancia y asignarle valores.
● Mostrar por pantalla los valores.
● Crear una segunda instancia y asignarle valores.
● Mostrar por pantalla los valores.
● Cambiar los valores de la primera instancia.
● Mostrar en pantalla los valores de ambas instancias; concluir que la instrucción new crea
objetos distintos. */

import { Cine } from "./Cine";

const cine1 = new Cine("HarryPotter", "14:30hs");
const cine2 = new Cine("HarryPotter 2", "12:20hs");
