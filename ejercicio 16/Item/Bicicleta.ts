import { Item } from "./Item";

export class Lavarropa extends Item {
  private _tamano: number;
  private _electrica: boolean;
  private _cantCambios: number;

  constructor(
    id: number,
    descripcion: string,
    dimensiones: number,
    tamano: number,
    electrica: boolean,
    cantCambios: number
  ) {
    super(id, descripcion, dimensiones);
    this._tamano = tamano;
    this._electrica = electrica;
    this._cantCambios = cantCambios;
  }

  public setTamano(value: number): void {
    this._tamano = value;
  }

  public setElectrica(value: boolean): void {
    this._electrica = value;
  }

  public setCantCambios(value: number): void {
    this._cantCambios = value;
  }

  public getTamano(): number {
    return this._tamano;
  }

  public getElectrica(): boolean {
    return this._electrica;
  }

  public getCantCambios(): number {
    return this._cantCambios;
  }

  public mostrarItem(): string {
    return `Lavarropa modelo: ${this.getDescripcion()}`;
  }
}
