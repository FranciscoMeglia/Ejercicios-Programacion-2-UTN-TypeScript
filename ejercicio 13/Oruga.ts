import { Traccion } from "./Traccion";

export class Oruga extends Traccion {
  constructor(restaHp: number, permiteRodado: number) {
    super(restaHp, permiteRodado);
  }

  public infoExtra(): string {
    return "Cuando se gasta debe remplazarse";
  }
}
