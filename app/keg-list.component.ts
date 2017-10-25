import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <h2>Kegs</h2>
    <ul>
      <li *ngFor="let keg of kegs"
        (click)="focus(keg)">
        {{keg.brand}} - {{keg.name}}, {{keg.abv}}% - {{"$" + keg.price}}
      </li>
    <ul>
  `
})

export class KegListComponent {
  @Input() kegs: Keg[];
  @Output() focusClick = new EventEmitter();

  focus(keg: Keg) {
    this.focusClick.emit(keg);
  }
}
