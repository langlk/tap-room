import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <h2>Kegs</h2>
    <ul>
      <li *ngFor="let keg of kegs">
        {{keg.brand}} - {{keg.name}}, {{keg.abv}}% - {{"$" + keg.price}}
        <button type="button" class="btn" (click)="editKeg(keg)">Edit</button>
      </li>
    <ul>
  `
})

export class KegListComponent {
  @Input() kegs: Keg[];
  @Output() editClick = new EventEmitter();

  editKeg(keg: Keg) {
    this.editClick.emit(keg);
  }
}
