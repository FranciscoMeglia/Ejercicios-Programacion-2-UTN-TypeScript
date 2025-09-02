import { Item } from "../Item/Item";

export class Vehiculo {
  private _modelo: string;
  private _carga: object[];
  private _capacidadMaxima: number;

  constructor(modelo: string, capacidadMaxima: number) {
    this._modelo = modelo;
    this._capacidadMaxima = capacidadMaxima;
  }

  public setModelo(value: string): void {
    this._modelo = value;
  }

  public getModelo(): string {
    return this._modelo;
  }

  public setCapacidadMaxima(value: number): void {
    this._capacidadMaxima = value;
  }

  public getCapacidadMaxima(): number {
    return this._capacidadMaxima;
  }

  public cargar(item: Item): string {
    if (this._capacidadMaxima < this._carga.length) {
      this._carga.push(item);
      return "Item cargado con exito";
    }
    return "El vehiculo ya se encuentra lleno";
  }

  public listarItems(): object[] {
    return this._carga;
  }
}
