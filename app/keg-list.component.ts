import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <h2>Kegs</h2>
    <ul>
      <li *ngFor="let keg of kegs">
        {{keg.brand}} - {{keg.name}}, {{keg.abv}}% - {{"$" + keg.price}}
      </li>
    <ul>
  `
})

export class KegListComponent {
  kegs: Keg[] = [
    new Keg('Hop Czar', 'Bridgeport', 6, 7),
    new Keg('Dark Marc', 'M.T. Head', 5, 8),
    new Keg('Dawn of the Red', 'Nikasi', 5, 6),
    new Keg('Rainier', 'Rainier', 2, 3),
    new Keg('Voodoo Ranger', 'New Belgium', 6, 9)
  ]
}
