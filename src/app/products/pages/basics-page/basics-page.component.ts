import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'gaston';
  public nameUpper: string = 'gaston';
  public fullName: string = 'gAsToN RoDrIgUeZ';
  public customDate: Date = new Date();
  public customDate2: string = 'gAsToN RoDrIgUeZ';
}
