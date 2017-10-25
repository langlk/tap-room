import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <h2>Kegs</h2>
    <ul>
      <li *ngFor="let keg of kegs">
        <span (click)="focus(keg)">
          {{keg.brand}} - {{keg.name}}, {{keg.abv}}% - {{"$" + keg.price}}
        </span>
        <button type="button" class="btn" (click)="sellPint(keg)">Sell Pint</button>
      </li>
    <ul>
  `
})

export class KegListComponent {
  @Input() kegs: Keg[];
  @Output() kegClick = new EventEmitter();

  focus(keg: Keg) {
    this.kegClick.emit({"event": "focus", "keg": keg});
  }

  sellPint(keg: Keg) {
    this.kegClick.emit({"event": "sellPint", "keg": keg});
  }
}
