import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-details',
  template: `
    <div *ngIf=focusKeg>
      <h2>
        {{focusKeg.name}}
        <a (click)="edit()" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">mode_edit</i></a>
      </h2>
      <h3>{{focusKeg.brand}}</h3>
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
  `
})

export class KegDetailsComponent {
  @Input() focusKeg: Keg;
  @Output() editClick = new EventEmitter();

  edit() {
    this.editClick.emit(this.focusKeg);
  }
}
