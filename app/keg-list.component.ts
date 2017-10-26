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
      <table class="highlight">
        <thead>
          <tr>
            <th class="first-col">Brewery</th>
            <th>Name</th>
            <th>ABV</th>
            <th>Price</th>
            <th class="icon-col">Pint</th>
            <th class="icon-col">Growler</th>
          <tr>
        </thead>
        <tbody>
          <tr *ngFor="let keg of kegs | volume:volumeFilter">
            <td (click)="focus(keg)" class="clickable first-col">{{keg.brewery}}</td>
            <td (click)="focus(keg)" class="clickable">{{keg.name}}</td>
            <td class="clickable" (click)="focus(keg)">
              <span [class]="alcoholContent(keg)">{{keg.abv}}%</span>
            </td>
            <td class="clickable"(click)="focus(keg)">
              <span [class]="priceColor(keg)">{{"$" + keg.getPrice(happyHourActive, discount)}}</span>
            </td>
            <td class="icon-col">
              <a href="#" (click)="sellPint(keg)" class="waves-effect waves-orange">
                <i class="material-icons amber-text text-darken-1">local_drink</i>
              </a>
            </td>
            <td class="icon-col">
              <a href="#" (click)="sellGrowler(keg)" class="waves-effect waves-orange">
                <i class="material-icons amber-text text-darken-1">local_gas_station</i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})

export class KegListComponent {
  @Input() kegs: Keg[];
  @Input() happyHourActive: boolean;
  @Input() discount: number;
  @Output() kegClick = new EventEmitter();
  volumeFilter: string = "allKegs";

  focus(keg: Keg) {
    this.kegClick.emit({"event": "focus", "keg": keg});
  }

  sellPint(keg: Keg) {
    this.kegClick.emit({"event": "sellPint", "keg": keg});
  }

  sellGrowler(keg: Keg) {
    this.kegClick.emit({"event": "sellGrowler", "keg": keg})
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
