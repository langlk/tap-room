import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <new-keg (kegCreator)="addKeg($event)"></new-keg>
    <keg-list [kegs]="kegsMaster" (focusClick)="focusKeg($event)"></keg-list>
    <keg-details [focusKeg]="masterFocus" (editClick)="editKeg($event)"></keg-details>
    <edit-keg [selectedKeg]="masterEdit" (doneClick)="editDone()"></edit-keg>
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

  focusKeg(clickedKeg: Keg) {
    this.masterFocus = clickedKeg;
  }

  editKeg(clickedKeg: Keg) {
    this.masterEdit = clickedKeg;
  }

  editDone() {
    this.masterEdit = null;
  }
}
