import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title(title: any) {
     throw new Error('Method not implemented.');
   }
   items: Array<any> = []

   constructor() {
     this.items = [
       { name:'assets/images/1.jpg' }, //name or url
       { name:'assets/images/2.jpg' },
       { name:'assets/images/3.jpg' },
       { name:'assets/images/1.jpg' }, //name or url
       { name:'assets/images/2.jpg' },
       { name:'assets/images/3.jpg' },
       { name:'assets/images/1.jpg' }, //name or url
       { name:'assets/images/2.jpg' },
       { name:'assets/images/3.jpg' },
     ]
   }
}
