import { PostsService } from './posts.service';
import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  providers: [DataService],
  template: `
      <div>
      <h1 align='center'>Form Module</h1>
      <form #form='ngForm' align='center'>
            First Name : <input type="text"
            name='txtFname' id='txtFname' ngModel format required /> <br/>
            Last Name : <input type="text"
            name='txtLname' id='txtLname' ngModel format required /><br/>
            <button type='button' name='btn1'
            [disabled]='!form.valid' (click)='log(form)'>
            Submit
            </button>
            <pre>
                {{form.value | json}}
            </pre>
            <br/>
      </form>


       <border>oracle</border>
        <form name='frm1' align='center'>
            First Name : <input type="text"
            name='txtFname' id='txtFname' format /> <br/>
            Last Name : <input type="text"
            name='txtLname' id='txtLname' format /><br/>
            <br/>
            <select [(ngModel)]='country' name='selCountry'>
              <option value="IN">India</option>
              <option value="GB">Pound</option>
              <option value="MY">Malaysia</option>
              <option value="US">USA</option>
            </select>
            <div [ngSwitch]='country'>
              <h3 *ngSwitchCase="'IN'">Rupee</h3>
              <h3 *ngSwitchCase="'GB'">Pound</h3>
              <h3 *ngSwitchDefault>Ringitt</h3>
              <h3 *ngSwitchCase="'US'">Dollar</h3>
            </div>
       </form>
      <h1> {{title | uppercase}} </h1>
      <quote></quote>


      <div *ngIf="comments.length>0; else nocomments">
        <p>Comments here ...{{comments}}</p>
      </div>
      <ng-template #nocomments>
        <p>No Comments yet !</p>
      </ng-template>
      <div align='center'>
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
      <input type='text' name='TxtTitle' [(ngModel)]='title' />
      <br/>
      <button type='button' name='bt1' id='btn1' (click)='changeTitle()'>
         Change Title</button>
      <p>{{pi}}</p>
      <p>{{pi | number : '1.1-3' : 'fr'}}</p>
      <p>{{score | percent : '2.1-2'}}</p>
      <p>Temperature : {{37  | Convert }}</p>

      <div *ngFor="let user of users">
        <p>{{user.id}}  - {{user.name}}</p>

      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div *ngFor="let post of objPosts">
          <span>
              {{post.id}} - {{post.title}} - 
          </span>
      
      </div>
    </div>
  `
})
export class AppComponent implements OnInit{
  
  objPeople: object;
  objPosts: object;
  constructor(private data: DataService, private postsData:PostsService){
    
  }

  ngOnInit(): void {
    this.objPeople = this.data.getAllGoodPeople();
    this.postsData.getPosts()
    .then((data) => this.objPosts = data);
  }

  title = 'Hello Saurav';
  users=[{id:101, name : 'SAURAV'},{id:102, name : 'GAURAV'}]
  country : string="IN";
  pi: number = Math.PI;
  score: number = 0.89567;
  comments = ['Hello', 'INDIA'];
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
  log(form:any){
    alert(form.controls.txtFname.value);
    alert(form.controls.txtFname.valid);
  }
}
