import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div class="z-depth-1 keg-list">
      <div class="keg-list-header">
        <h2>Kegs</h2>
        <div class="switch">
          <label>
            All Kegs
            <input type="checkbox" (click)=toggleList()>
            <span class="lever"></span>
            Low Kegs Only
          </label>
        </div>
      </div>

      <ul class="collection">
        <li *ngFor="let keg of kegs | volume:volumeFilter" class="collection-item">
          <span (click)="focus(keg)" class="clickable">
            {{keg.brand}} - {{keg.name}},
            <span [class]="alcoholContent(keg)">{{keg.abv}}%</span>
            -
            <span [class]="priceColor(keg)">{{"$" + keg.price}}</span>
          </span>
          <a href=
          "#" (click)="sellPint(keg)" class="secondary-content waves-effect waves-orange"><i class="material-icons amber-text">local_drink</i></a>
        </li>
      </ul>
    </div>
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

  toggleList() {
    if (this.volumeFilter === "allKegs") {
      this.volumeFilter = "lowKegs";
    } else {
      this.volumeFilter = "allKegs";
    }
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
