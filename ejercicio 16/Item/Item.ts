export abstract class Item {
  private _id: number;
  private _descripcion: string;
  private _dimensiones: number;

  constructor(id: number, descripcion: string, dimensiones: number) {
    this._id = id;
    this._descripcion = descripcion;
    this._dimensiones = dimensiones;
  }

  public setId(value: number): void {
    this._id = value;
  }

  public setDescripcion(value: string): void {
    this._descripcion = value;
  }

  public setDimensiones(value: number): void {
    this._dimensiones = value;
  }

  public getId(): number {
    return this._id;
  }

  public getDescripcion(): string {
    return this._descripcion;
  }

  public getDimensiones(): number {
    return this._dimensiones;
  }

  public abstract mostrarItem(): string;
}
