export class Keg {
  volume: number = 12;

  constructor(public name: string, public brand: string, public price: number, public abv: number) { }

  sell(size: number) {
    this.volume -= size;
  }
}
