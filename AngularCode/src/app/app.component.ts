import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* template: '<h1>hola</h1>', */
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title(title: any) {
     throw new Error('Method not implemented.');
   }
   items: Array<any> = []           //Array de las imagenes que se pueden cargar por ruta local o por base datos
                                            
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
