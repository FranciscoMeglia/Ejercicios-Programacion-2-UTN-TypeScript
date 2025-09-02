import { Persona } from "./Persona";
import { Visitante } from "./Visitante";

export class Guardia extends Persona {
  constructor(nombre: string, apellido: string) {
    super(nombre, apellido);
  }

  public presentarse(): string {
    return `Hola, mi nombre es ${this.getNombre()} ${this.getApellido()} y soy el guardia`;
  }

  public controlarDocumento(value: Visitante): string {
    return `Adelante ${value.getNombre()} ${value.getApellido()} con dni ${value.getDni()}`;
  }
}
