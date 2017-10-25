import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <div class="z-depth-1 add-keg">
      <h2>Add a Keg</h2>
      <form id="new-keg">
        <div>
          <label>Name:</label>
          <input #newName>
        </div>
        <div>
          <label>Brand:</label>
          <input #newBrand>
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
        <button type="button" (click)="addKeg(newName.value, newBrand.value, newPrice.value, newABV.value)" class="btn amber darken-3">Submit</button>
      </form>
    </div>
  `
})

export class NewKegComponent {
  @Output() kegCreator = new EventEmitter();

  addKeg(name: string, brand: string, price: number, abv: number) {
    var newKeg: Keg = new Keg(name, brand, price, abv);
    this.kegCreator.emit(newKeg);
  }
}
