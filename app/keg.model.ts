export class Keg {
  volume: number = 124;

  constructor(public name: string, public brewery: string, public price: number, public abv: number) { }

  sell(size: number) {
    this.volume -= size;
  }
}
