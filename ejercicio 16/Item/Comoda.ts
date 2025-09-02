import { Item } from "./Item";

export class Comoda extends Item {
  private _superficie: number;
  private _cantCajones: number;

  constructor(
    id: number,
    descripcion: string,
    dimensiones: number,
    superficie: number,
    cantCajones: number
  ) {
    super(id, descripcion, dimensiones);
    this._superficie = superficie;
    this._cantCajones = cantCajones;
  }

  public setSuperficie(value: number): void {
    this._superficie = value;
  }

  public setCantCajones(value: number): void {
    this._cantCajones = value;
  }

  public getSuperficie(): number {
    return this._superficie;
  }

  public getCantCajones(): number {
    return this._cantCajones;
  }

  public mostrarItem(): string {
    return `Comoda modelo: ${this.getDescripcion()}`;
  }
}
