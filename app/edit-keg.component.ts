import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="selectedKeg" class="card edit-keg">
      <div class="card-image">
        <img src="http://nordictravelmag.com/wp-content/uploads/2017/06/01.jpg">
        <span class="card-title">Edit: {{selectedKeg.name}}</span>
      </div>
      <div class="card-content">
        <form id="edit-keg">
          <div>
            <label>Name:</label>
            <input id="input1" [(ngModel)]="selectedKeg.name" name="keg-name">
          </div>
          <div>
            <label>Brand:</label>
            <input [(ngModel)]="selectedKeg.brand" name="keg-brand">
          </div>
          <div class="row">
            <div class="col s6">
              <label>Price/Pint:</label>
              <input [(ngModel)]="selectedKeg.price" name="keg-price">
            </div>
            <div class="col s6">
              <label>ABV:</label>
              <input [(ngModel)]="selectedKeg.abv" name="keg-abv">
            </div>
          </div>
          <button type="button" (click)="editDone()" class="btn amber darken-3">Done Editing</button>
        </form>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() selectedKeg: Keg;
  @Output() doneClick = new EventEmitter();

  editDone() {
    this.doneClick.emit();
  }
}
