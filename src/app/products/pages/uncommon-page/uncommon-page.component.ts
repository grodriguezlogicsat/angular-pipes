import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html'
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Gabriel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }


  changeClient():void{
    this.name = 'Milena';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ['Gabriel','Mielana','Sofia','Martin','Vanesa','Natalia','Emma','Gustavo','Norberto','Marta']
  public clientsMap = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos 1 cliente esperando.',
    'other':'tenemos # clientes esperando.',
  }


  deleteClient():void{
    this.clients.shift();
  }


  //KeyValuePipe
  public person ={
    name: 'Gabriel',
    age: 30,
    city: 'Montevideo'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('Resultado: ', value)
    )
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  })
}
