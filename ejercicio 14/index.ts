/* 14. Una empresa de seguridad que se dedica a la vigilancia mediante el empleo de drones, ha
desarrollado un sistema de montaje que permitirá que los drones puedan cargar, además de la
cámara de vigilancia, una herramienta accionable a distancia.
Actualmente el sistema de anclaje admite:
5
● Sensor infrarrojo: pesa 250 gramos
● Taser: pesa 300 gramos
● Brazo robótico: pesa 500 gramos
El dron puede soportar hasta 200 gramos sin sufrir penalizaciones de velocidad (5 mts/s) ni
altura (100 mts); luego, por cada 50 gramos extras, el dron reduce su velocidad en 2% y
la altura en 5%.
Analizar, diseñar, diagramar las relaciones e implementar el código.
Crear instancias de cada una de las clases y asignarle al dron las distintas herramientas,
procurando mostrar por pantalla los siguientes datos entre las distintas asignaciones:
velocidad, altura y tipo de herramienta que lleva. */

import { Drone } from "./Drone";
import { Herramienta } from "./Herramienta";

const sensor = new Herramienta("Sensor infrarrojo", 250);
const taser = new Herramienta("Taser", 300);
const brazo = new Herramienta("Brazo robotico", 500);

// Instacia de drone agregandole el arma
const mavic = new Drone("DJI Mavic Pro", 5, 100, taser);
