import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { GaleriaComponent } from './galeria/galeria.component';    //Este es el import del paquete

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule                                   //esto se añade tambien
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
