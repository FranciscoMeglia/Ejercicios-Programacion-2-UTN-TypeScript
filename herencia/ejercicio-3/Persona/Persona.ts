import { Celular } from "../Celular/Celular";

export class Persona {
  private _nombre: string;
  private _celular: Celular;

  constructor(nombre: string, celular: Celular) {
    this._nombre = nombre;
    this._celular = celular;
  }

  public getNombre(): string {
    return this._nombre;
  }

  public getCelular(): Celular {
    return this._celular;
  }
}
