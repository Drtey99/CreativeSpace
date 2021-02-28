import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* arreglado todo el routing -Juanjo */


import { GaleriaComponent } from './galeria/galeria.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactoComponent } from './contacto/contacto.component';
/* import { SlidesComponent } from './slides/slides.component'; */

const rutas = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'galeria', component: GaleriaComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'team', component: TeamComponent},
/*   { path: 'slides', component: SlidesComponent} */
  { path: '**', component: Pagina404Component}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
