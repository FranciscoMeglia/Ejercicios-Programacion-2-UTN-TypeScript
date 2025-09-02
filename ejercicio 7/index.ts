/* 7. Crear una clase Ninja con las variables privadas arteMarcial, arma, fuerza (entero) y salto
(entero).
● Crear setters y getters manualmente.
● Crear una función saltar() que reciba un parámetro multiplicador (entero); imprimir
por consola salto x parámetro.
● Crear la función ataque() que imprima por consola el arma que usa el ninja y el
arte marcial.
● Crear dos instancias de Ninja, asignar distintos valores para cada uno de los
atributos e invocar las funciones saltar() y ataque(). */

import { Ninja } from "./Ninja";

const ninja1 = new Ninja("Kunfu", "Manos", 100, 10);
const ninja2 = new Ninja("Karate", "Manos", 110, 8);
