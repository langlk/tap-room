import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <div class="row">
      <div class="col-sm-6">
        <keg-list [kegs]="kegsMaster" (kegClick)="kegClick($event)"></keg-list>
      </div>
      <div class="col-sm-6">
        <keg-details [focusKeg]="masterFocus" (editClick)="editKeg($event)"></keg-details>
        <edit-keg [selectedKeg]="masterEdit" (doneClick)="editDone()"></edit-keg>
      </div>
    </div>
    <new-keg (kegCreator)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  kegsMaster: Keg[] = [
    new Keg('Hop Czar', 'Bridgeport', 6, 7),
    new Keg('Dark Marc', 'M.T. Head', 5, 8),
    new Keg('Dawn of the Red', 'Nikasi', 5, 6),
    new Keg('Rainier', 'Rainier', 2, 3),
    new Keg('Voodoo Ranger', 'New Belgium', 6, 9)
  ]
  masterEdit: Keg;
  masterFocus: Keg;

  addKeg(newKeg: Keg) {
    this.kegsMaster.push(newKeg);
  }

  kegClick(clickInfo) {
    if (clickInfo["event"] === "focus") {
      this.focusKeg(clickInfo["keg"]);
    } else if (clickInfo["event"] === "sellPint") {
      this.sellPint(clickInfo["keg"]);
    }
  }

  focusKeg(clickedKeg: Keg) {
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

  editDone() {
    this.masterFocus = this.masterEdit;
    this.masterEdit = null;
  }

  sellPint(keg: Keg) {
    keg.sell(1);
  }
}
