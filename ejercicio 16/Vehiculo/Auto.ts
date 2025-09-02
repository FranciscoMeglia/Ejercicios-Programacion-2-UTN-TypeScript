import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
  constructor(modelo: string) {
    super(modelo, 5);
  }
}
