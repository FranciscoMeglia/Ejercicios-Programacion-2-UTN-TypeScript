import { Vehiculo } from "./Vehiculo";

export class Camioneta extends Vehiculo {
  constructor(modelo: string) {
    super(modelo, 10);
  }
}
