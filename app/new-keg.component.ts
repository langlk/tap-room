import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <div class="z-depth-1 new-keg">
      <h2>Add a Keg</h2>
      <form id="new-keg">
        <div>
          <label>Name:</label>
          <input #newName>
        </div>
        <div>
          <label>Brewery:</label>
          <input #newBrewery>
        </div>
        <div class="row">
          <div class="col s6">
            <label>Price/Pint:</label>
            <input #newPrice>
          </div>
          <div class="col s6">
            <label>ABV:</label>
            <input #newABV>
          </div>
        </div>
        <button type="button" (click)="addKeg(newName.value, newBrewery.value, newPrice.value, newABV.value)" class="btn amber darken-3 waves-effect waves-light">Submit</button>
      </form>
    </div>
  `
})

export class NewKegComponent {
  @Output() kegCreator = new EventEmitter();

  addKeg(name: string, brewery: string, price: number, abv: number) {
    var newKeg: Keg = new Keg(name, brewery, price, abv);
    this.kegCreator.emit(newKeg);
  }
}
