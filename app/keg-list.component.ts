import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <h2>Kegs</h2>
    <select (change)="listType($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="lowKegs">Low Kegs</option>
    </select>
    <ul>
      <li *ngFor="let keg of kegs | volume:volumeFilter">
        <span (click)="focus(keg)" class="clickable">
          {{keg.brand}} - {{keg.name}},
          <span [class]="alcoholContent(keg)">{{keg.abv}}%</span>
          -
          <span [class]="priceColor(keg)">{{"$" + keg.price}}</span>
        </span>
        <button type="button" class="btn" (click)="sellPint(keg)">Sell Pint</button>
      </li>
    <ul>
  `
})

export class KegListComponent {
  @Input() kegs: Keg[];
  @Output() kegClick = new EventEmitter();
  volumeFilter: string = "allKegs";

  focus(keg: Keg) {
    this.kegClick.emit({"event": "focus", "keg": keg});
  }

  sellPint(keg: Keg) {
    this.kegClick.emit({"event": "sellPint", "keg": keg});
  }

  listType(type) {
    this.volumeFilter = type;
  }

  priceColor(keg) {
    if (keg.price > 5) {
      return "price-high";
    } else {
      return "price-low";
    }
  }

  alcoholContent(keg) {
    if (keg.abv > 8) {
      return "abv-high";
    } else if (keg.abv > 4) {
      return "abv-med";
    } else {
      return "abv-low";
    }
  }
}
