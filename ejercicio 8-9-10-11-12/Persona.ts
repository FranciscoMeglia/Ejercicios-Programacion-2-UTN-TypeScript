export class Persona {
  private _nombre: string;
  private _apellido: string;

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

  public presentarse(): string {
    return `Hola, mi nombre es ${this._nombre} ${this._apellido}`;
  }
}
