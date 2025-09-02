import { Item } from "./Item";

export class Lavarropa extends Item {
  private _voltaje: number;
  private _carga: number;
  private _revoluciones: number;

  constructor(
    id: number,
    descripcion: string,
    dimensiones: number,
    voltaje: number,
    carga: number,
    revoluciones: number
  ) {
    super(id, descripcion, dimensiones);
    this._voltaje = voltaje;
    this._carga = carga;
    this._revoluciones = revoluciones;
  }

  public setVoltaje(value: number): void {
    this._voltaje = value;
  }

  public setCarga(value: number): void {
    this._carga = value;
  }

  public setRevoluciones(value: number): void {
    this._revoluciones = value;
  }

  public getVoltaje(): number {
    return this._voltaje;
  }

  public getCarga(): number {
    return this._carga;
  }

  public getRevoluciones(): number {
    return this._revoluciones;
  }

  public mostrarItem(): string {
    return `Lavarropa modelo: ${this.getDescripcion()}`;
  }
}
