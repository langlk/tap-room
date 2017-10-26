import { Component } from '@angular/core';
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
        <p><strong>4-6pm, Every Day</strong></p>
        <p>All Pints $1 Off<p>
      </div>
    </div>
  `
})

export class HappyHourComponent {

}
