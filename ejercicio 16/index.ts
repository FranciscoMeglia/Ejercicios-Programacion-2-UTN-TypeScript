/* 16. Una empresa de logística que se encarga de realizar envíos, pone a disposición de sus clientes
dos tipos de vehículos:
● Una camioneta con capacidad para llevar cómodas, heladeras y lavarropas.
● Un auto con espacio suficiente como para llevar televisores, bicicletas plegables y cajas
pequeñas.
Modelar las entidades teniendo en cuenta las siguientes consideraciones:
● Los vehículos deben ofrecer el método cargar() para ir incrementando su carga, razón
por la cual la función debe recibir el dato por parámetro.
● Mediante el empleo del método listarItems() el vehículo deberá facilitar el listado que
compone la carga.
6
● Todos los elementos poseen una descripción, dimensiones y un número que los
identifica pero, además, resulta de interés:
i. Cómodas: superficie y cantidad de cajones.
ii. Heladeras: voltaje al que trabaja y si posee freezer.
iii. Lavarropas: voltaje al que trabaja, carga y revoluciones de centrifugado.
iv. Televisores: voltaje al que trabaja, si es de led o lcd y si es inteligente.
v. Bicicletas: tamaño de rodado, si son eléctricas y cantidad de cambios.
Analizar, diseñar, diagramar las relaciones e implementar el código considerando que la
capacidad máxima de carga del auto es de 5 elementos, mientras que para la camioneta
es de 10. */

import { Auto } from "./Vehiculo/Auto";
import { Camioneta } from "./Vehiculo/Camioneta";

const auto1 = new Auto("Peugeot 208");
const camioneta1 = new Camioneta("Ford Raptor F150");
