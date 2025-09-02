export class Cine {
  private _pelicula: string;
  private _horario: string;

  constructor(pelicula: string, horario: string) {
    this._pelicula = pelicula;
    this._horario = horario;
  }

  public setPelicula(pelicula: string): void {
    this._pelicula = pelicula;
  }

  public setHorario(horario: string): void {
    this._horario = horario;
  }

  public getPelicula(): string {
    return this._pelicula;
  }

  public getModelo(): string {
    return this._horario;
  }

  public obtenerCartelera(): string {
    return `Pelicula ${this._pelicula} , horario: ${this._horario}`;
  }
}
