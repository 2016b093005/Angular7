import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1> {{title | uppercase}} </h1>
      <quote></quote>
      <p> {{1234 | currency: 'INR' : 'symbol'}}</p>
      <p> {{today | date : 'medium'}}</p>
      <p> {{today | date : 'shortDate'}}</p>
      <p> {{today | date : 'longDate' : '' : 'fr'}}</p>
      <p> {{today | date : 'shortTime'}}</p>
      <p> {{today | date : 'EEEE, MMMM d, yyyy' | uppercase}}</p>
      <p> {{companies | slice : "2" : "3"}}</p>
      <counter [count]="count" (countChanged)="handleEvt()"></counter>
      <hr/>
      <img [src]="imageUrl" [width]="imgWidth" [height]="imgHeight" />
      <br/>
      <input type='text' name='TxtTitle'
      [(ngModel)]  = 'title' />
      <br/>
      <button type='button' name='bt1' id='btn1' (click)='changeTitle()'>
         Change Title</button>
      <p>{{pi}}</p>
      <p>{{pi | number : '1.1-3' : 'fr'}}</p>
      <p>{{score | percent : '2.1-2'}}</p>
      <p>Temperature : {{37  | Convert }}</p>
    </div>
  `
})
export class AppComponent {
  title = 'Hello Saurav';
  pi: number = Math.PI;
  score: number = 0.89567;
  today = new Date();
  imageUrl: string = '../assets/django-apps.gif';
  imgHeight: number = 200;
  imgWidth: number = 200;
  count: number = 1;
  companies = ['Apple', 'Bluestar', 'Oracle', 'Dell'];
  changeTitle() {
    this.title = 'My Angular Component';
  }
  handleEvt() {
    alert('Event Triggered');
  }
  

}
