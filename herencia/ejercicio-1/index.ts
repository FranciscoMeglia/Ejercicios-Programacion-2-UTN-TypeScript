/* Ejercicio - Figuras geométricas

Desarrollar una aplicación que permita conocer el área y el perímetro de un triángulo, de un
cuadrado y de un círculo. Cada figura posee un nombre y un color. La aplicación debe permitir
obtener para cada una de las figuras su nombre, color, perímetro y área. Para probar esta
aplicación, cree por lo menos 1 figura de cada tipo y muestre el resultado de invocar a sus
métodos. Implemente la misma solución utilizando polimorfismo. */

import { Circulo } from "./Circulo";
import { Cuadrado } from "./Cuadrado";
import { Triangulo } from "./Triangulo";

const circulo = new Circulo("Circulo 1", "Azul", 25);
const cuadrado = new Cuadrado("Cuadrado 1", "Rojo", 10);
const triangulo = new Triangulo("Triangulo 1", "Verde", 10, 12, 13);

//console.log(circulo.getPerimetro());
//console.log(cuadrado.getPerimetro());
//console.log(triangulo.getPerimetro());

//console.log(circulo.getArea());
//console.log(cuadrado.getArea());
//console.log(triangulo.getArea());
