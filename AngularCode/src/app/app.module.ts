import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { GaleriaComponent } from './galeria/galeria.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SlidesComponent } from './slides/slides.component';  

import { AppRoutingModule } from './app-routing.module'; //Anadido ROUTING -Juanjo


@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    Pagina404Component,
    ServiciosComponent,
    AboutComponent,
    TeamComponent,
    ContactoComponent,
    SlidesComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,                                  //esto se añade tambien
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
