import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="selectedKeg">
      <h2>Edit Keg: {{selectedKeg.name}}</h2>
      <form>
        <div class="form-group">
          <label>Name:</label>
          <input [(ngModel)]="selectedKeg.name" name="keg-name">
        </div>
        <div class="form-group">
          <label>Brand:</label>
          <input [(ngModel)]="selectedKeg.brand" name="keg-brand">
        </div>
        <div class="form-group">
          <label>Price/Pint:</label>
          <input [(ngModel)]="selectedKeg.price" name="keg-price">
        </div>
        <div class="form-group">
          <label>ABV:</label>
          <input [(ngModel)]="selectedKeg.abv" name="keg-abv">
        </div>
      </form>
    </div>
  `
})

export class EditKegComponent {
  @Input() selectedKeg: Keg;
}
