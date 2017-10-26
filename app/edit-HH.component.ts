import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HappyHour } from './happy-hour.model';

@Component({
  selector: 'edit-HH',
  template: `
    <div *ngIf="editActive" class="card" id="edit-HH">
      <div class="card-image">
        <img src="resources/images/beer.jpg">
        <span class="card-title">Edit: Happy Hour</span>
      </div>
      <div class="card-content">
        <form id="edit-hh-form">
          <div class="row">
            <div class="col s4">
              <label>Start:</label>
              <input [(ngModel)]="happyHour.startTime" name="start-time">
            </div>
            <div class="col s4">
              <label>End:</label>
              <input [(ngModel)]="happyHour.endTime" name="end-time">
            </div>
            <div class="col s4">
              <label>Discount:</label>
              <input [(ngModel)]="happyHour.discount" name="discount">
            </div>
          </div>

          <button type="button" (click)="editDone()" class="btn amber darken-3 waves-effect waves-light">Done Editing</button>
        </form>
      </div>
    </div>
  `
})

export class EditHHComponent {
  @Input() editActive: boolean;
  @Input() happyHour: HappyHour;
  @Output() doneClick = new EventEmitter();

  editDone() {
    this.doneClick.emit();
  }
}
