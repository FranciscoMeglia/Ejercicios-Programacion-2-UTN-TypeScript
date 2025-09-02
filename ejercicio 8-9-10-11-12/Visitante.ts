import { Persona } from "./Persona";

export class Visitante extends Persona {
  private _dni: number;

  constructor(nombre: string, apellido: string, dni: number) {
    super(nombre, apellido);
    this._dni = dni;
  }

  public setDni(value: number): void {
    this._dni = value;
  }

  public getDni(): number {
    return this._dni;
  }
}
