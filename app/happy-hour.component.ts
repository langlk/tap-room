import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HappyHour } from './happy-hour.model';

@Component({
  selector: 'happy-hour',
  template: `
    <div *ngIf="!editActive" class="card" id="happy-hour">
      <div class="card-image">
        <img src="resources/images/beer.jpg">
        <span class="card-title">Happy Hour</span>
        <a (click)="edit()" class="btn-floating waves-effect halfway-fab waves-light amber darken-4 right"><i class="material-icons">mode_edit</i></a>
      </div>
      <div class="card-content">
        <p *ngIf="active" [id]="isActive()">Happening Now!</p>
        <p>
          <strong>{{happyHour.startFormatted()}} to {{happyHour.endFormatted()}} Daily</strong>
        </p>
        <p>All Pints {{"$" + happyHour.discount}} Off<p>
      </div>
    </div>
  `
})

export class HappyHourComponent {
  @Input() happyHour: HappyHour;
  @Input() active: boolean;
  @Input() editActive: boolean;

  @Output() editClick = new EventEmitter();

  isActive() {
    if (this.active) {
      return "happy-hour-active";
    } else {
      return null;
    }
  }

  edit() {
    this.editClick.emit();
  }
}
