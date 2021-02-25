import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { GaleriaComponent } from './galeria/galeria.component';
import { Pagina404Component } from './pagina404/pagina404.component';    //Este es el import del paquete

const rutas = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: Pagina404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,                                  //esto se añade tambien
    RouterModule.forRoot(rutas) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
