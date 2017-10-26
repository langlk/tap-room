import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'happy-hour',
  template: `
    <div class="card" id="happy-hour">
      <div class="card-image">
        <img src="resources/images/beer.jpg">
        <span class="card-title">Happy Hour</span>
      </div>
      <div class="card-content">
        <p *ngIf="active" [id]="isActive()">Happening Now!</p>
        <p><strong>4 to 6pm, Every Day</strong></p>
        <p>All Pints $1 Off<p>
      </div>
    </div>
  `
})

export class HappyHourComponent {
  @Input() active: boolean;

  isActive() {
    if (this.active) {
      return "happy-hour-active";
    } else {
      return null;
    }
  }
}
