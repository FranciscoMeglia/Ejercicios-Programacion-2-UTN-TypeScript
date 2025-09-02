export class Persona {
  public _nombre: string;
  public _apellido: string;

  constructor(nombre: string, apellido: string) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  public setNombre(value: string): void {
    this._nombre = value;
  }

  public setApellido(value: string): void {
    this._apellido = value;
  }

  public getNombre(): string {
    return this._nombre;
  }

  public getApellido(): string {
    return this._apellido;
  }
}
