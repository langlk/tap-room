import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h2>Add a Keg</h2>
    <form>
      <div class="form-group">
        <label>Name:</label>
        <input #newName>
      </div>
      <div class="form-group">
        <label>Brand:</label>
        <input #newBrand>
      </div>
      <div class="form-group">
        <label>Price/Pint:</label>
        <input #newPrice>
      </div>
      <div class="form-group">
        <label>ABV:</label>
        <input #newABV>
      </div>
      <button type="button" (click)="addKeg(newName.value, newBrand.value, newPrice.value, newABV.value)" class="btn">Submit</button>
    </form>
  `
})

export class NewKegComponent {
  @Output() kegCreator = new EventEmitter();

  addKeg(name: string, brand: string, price: number, abv: number) {
    var newKeg: Keg = new Keg(name, brand, price, abv);
    this.kegCreator.emit(newKeg);
  }
}
