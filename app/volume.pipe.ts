import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "volume",
  pure: false
})

export class VolumePipe implements PipeTransform {
  transform(input: Keg[], filter) {
    if (filter === "lowKegs") {
      var output: Keg[] = [];
      for (var i = 0; i < input.length; i++) {
        if (input[i].volume < 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
