import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <new-keg (kegCreator)="addKeg($event)"></new-keg>
    <keg-list [kegs]="kegsMaster" (editClick)="editKeg($event)"></keg-list>
    <edit-keg [selectedKeg]="masterSelected"></edit-keg>
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
  masterSelected: Keg;

  addKeg(newKeg: Keg) {
    this.kegsMaster.push(newKeg);
  }

  editKeg(clickedKeg: Keg) {
    this.masterSelected = clickedKeg;
  }
}
