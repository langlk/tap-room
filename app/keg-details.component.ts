import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-details',
  template: `
    <div *ngIf=focusKeg class="card">
      <div class="card-image">
        <img src="http://nordictravelmag.com/wp-content/uploads/2017/06/01.jpg">
        <h2 class="card-title">{{focusKeg.name}}</h2>
        <a (click)="edit()" class="btn-floating waves-effect halfway-fab waves-light red right"><i class="material-icons">mode_edit</i></a>
      </div>
      <div class="card-content">
        <h3 class="card-title">{{focusKeg.brand}}</h3>
        <p>
          <strong>Price/Pint:</strong>
          {{"$" + focusKeg.price}}
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
  @Output() editClick = new EventEmitter();

  edit() {
    this.editClick.emit(this.focusKeg);
  }
}
