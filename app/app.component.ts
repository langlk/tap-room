import { Component, OnInit } from '@angular/core';

import { Keg } from './keg.model';
import { HappyHour } from './happy-hour.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <div class="divider"></div>
    <div class="row">
      <div class="col m12 l5 push-l7">
        <keg-details
          [focusKeg]="masterFocus"
          [happyHourActive]="isHappyHour()"
          [discount]="happyHour.discount"
          (editClick)="editKeg($event)">
        </keg-details>
        <edit-keg [selectedKeg]="masterEdit" (doneClick)="editKegDone()"></edit-keg>
        <happy-hour
          [editActive]="editHappyHour"
          [active]="isHappyHour()"
          [happyHour]="happyHour"
          (editClick)="editHH()">
        </happy-hour>
        <edit-HH
          [editActive]="editHappyHour"
          [happyHour]="happyHour"
          (doneClick)="editHHDone()">
        </edit-HH>
      </div>
      <div class="col m12 l7 pull-l5">
        <keg-list
          [kegs]="kegsMaster"
          [happyHourActive]="isHappyHour()"
          [discount]="happyHour.discount"
          (kegClick)="kegClick($event)">
        </keg-list>
        <new-keg (kegCreator)="addKeg($event)"></new-keg>
      </div>
    </div>
  </div>
  `
})

export class AppComponent implements OnInit{
  kegsMaster: Keg[] = [
    new Keg('Hop Czar', 'Bridgeport', 6, 7),
    new Keg('Dark Marc', 'M.T. Head', 5, 8),
    new Keg('Dawn of the Red', 'Nikasi', 5, 6),
    new Keg('Rainier', 'Rainier', 2, 3),
    new Keg('Voodoo Ranger', 'New Belgium', 6, 9)
  ]
  masterEdit: Keg;
  masterFocus: Keg;
  now: Date = new Date(Date.now());
  happyHour: HappyHour = new HappyHour(16, 18, 1);
  editHappyHour: boolean = false;

  ngOnInit() {
    setInterval(() => {
      this.now = new Date(Date.now());
    }, 1000);
  }

  addKeg(newKeg: Keg) {
    this.kegsMaster.push(newKeg);
  }

  kegClick(clickInfo) {
    if (clickInfo["event"] === "focus") {
      this.focusKeg(clickInfo["keg"]);
    } else if (clickInfo["event"] === "sellPint") {
      this.sellPint(clickInfo["keg"]);
    } else if (clickInfo["event"] === "sellGrowler") {
      this.sellGrowler(clickInfo["keg"]);
    }
  }

  focusKeg(clickedKeg: Keg) {
    this.masterEdit = null;
    if (this.masterFocus === clickedKeg) {
      this.masterFocus = null;
    } else {
      this.masterFocus = clickedKeg;
    }
  }

  editKeg(clickedKeg: Keg) {
    this.masterEdit = clickedKeg;
    this.masterFocus = null;
  }

  editKegDone() {
    this.masterFocus = this.masterEdit;
    this.masterEdit = null;
  }

  sellPint(keg: Keg) {
    keg.sell(1);
  }

  sellGrowler(keg: Keg) {
    keg.sell(4);
  }

  isHappyHour() {
    return this.happyHour.isHappyHour(this.now);
  }

  editHH() {
    this.editHappyHour = true;
  }

  editHHDone() {
    this.editHappyHour = false;
  }
}
