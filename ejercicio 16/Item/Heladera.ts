import { Item } from "./Item";

export class Heladera extends Item {
  private _voltaje: number;
  private _freezer: boolean;

  constructor(
    id: number,
    descripcion: string,
    dimensiones: number,
    voltaje: number,
    freezer: boolean
  ) {
    super(id, descripcion, dimensiones);
    this._voltaje = voltaje;
    this._freezer = freezer;
  }

  public setVoltaje(value: number): void {
    this._voltaje = value;
  }

  public setFreezer(value: boolean): void {
    this._freezer = value;
  }

  public getVoltaje(): number {
    return this._voltaje;
  }

  public getFreezer(): boolean {
    return this._freezer;
  }

  public mostrarItem(): string {
    return `Heladera modelo: ${this.getDescripcion()}`;
  }
}
