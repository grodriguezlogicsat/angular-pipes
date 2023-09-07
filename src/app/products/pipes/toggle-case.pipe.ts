import { Pipe, PipeTransform } from '@angular/core';

// Gaston | toogleCase = 'GASTON'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false): string {

    return (toUpper) ? value.toUpperCase(): value.toLowerCase();
  }

}
