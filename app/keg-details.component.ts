import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-details',
  template: `
    <div *ngIf=focusKeg class="card" id="keg-details">
      <div class="card-image">
        <img src="resources/images/beer-foam.jpg" alt="Close-up of beer">
        <span class="card-title">{{focusKeg.brewery}} - {{focusKeg.name}}</span>
        <a (click)="edit()" class="btn-floating waves-effect halfway-fab waves-light orange darken-4 right"><i class="material-icons">mode_edit</i></a>
      </div>
      <div class="card-content">
        <p>
          <strong>Price/Pint:</strong>
          {{"$" + focusKeg.getPrice(happyHour)}}
          <span *ngIf="happyHour" id="happy-hour-pricing">Happy Hour Pricing</span>
        <p>
        <p>
          <strong>ABV:</strong>
          {{focusKeg.abv}}%
        </p>
        <p>
          <strong>Pints Remaining:</strong>
          {{focusKeg.volume}}
        </p>
      </div>
    </div>
  `
})

export class KegDetailsComponent {
  @Input() focusKeg: Keg;
  @Input() happyHour: boolean;
  @Output() editClick = new EventEmitter();

  edit() {
    this.editClick.emit(this.focusKeg);
  }
}
