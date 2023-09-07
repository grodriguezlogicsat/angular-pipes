import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
    let heoresReturn: Hero[] = [];
    switch (sortBy) {
      case 'name':
        heoresReturn = heroes.sort((a,b) => (a.name > b.name)? 1 : -1);
        break;
      case 'canFly':
        heoresReturn = heroes.sort((a,b) => (a.canFly > b.canFly)? 1 : -1);
        break;
      case 'color':
        heoresReturn = heroes.sort((a,b) => (a.color > b.color)? 1 : -1);
        break;

      default:
        break;
    }

    return heoresReturn;
  }

}
