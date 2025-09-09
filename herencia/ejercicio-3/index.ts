/* Ejercicio - Celulares

Implementar un aplicación donde se represente a personas que hablan entre sí por celulares.
Juliana tiene un Motorola G5, y Catalina tiene un iPhone.

El Motorola G5 pierde 0,25 "puntos" de batería por cada llamada, y el iPhone pierde 0,1% de la
duración de cada llamada en batería. Ambos celulares tienen 5 "puntos" de batería como
máximo.

Implementar a Juliana, Catalina, el Motorola G5 de Juliana y el iPhone de Catalina y hacer una
aplicación de consola en donde Juliana y Catalina se hagan llamadas telefónicas de distintas
duraciones.

Se pide al finalizar cada llamada:
1. Conocer la cantidad de batería de cada celular. => getBateria()
2. Saber si un celular está apagado (si está sin batería). => estaApagado()
3. Recargar un celular (que vuelva a tener su batería completa). => recargarCelular()
4. Saber si Juliana tiene el celular apagado; saber si Catalina tiene el celular apagado. => estaApagado() */

import { Iphone } from "./Celular/Iphone";
import { MotorolaG5 } from "./Celular/MotorolaG5";
import { Persona } from "./Persona/Persona";

const jualiana = new Persona("Juliana", new MotorolaG5());
const catalina = new Persona("Catalina", new Iphone());

console.log(jualiana.getCelular().enviarLlamada(catalina, 10));

// console.log("CELULAR DE JULIANA: ", jualiana.getCelular().mostrarInfo());
// console.log("CELULAR DE CATALINA: ", catalina.getCelular().mostrarInfo());
