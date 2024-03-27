import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { EmpleadosEditComponent } from './Components/empleados-edit/empleados-edit.component';
import { TipocapacitacionComponent } from './Components/tipocapacitacion/tipocapacitacion.component';
import { TipocapacitacionEditComponent } from './Components/tipocapacitacion-edit/tipocapacitacion-edit.component';
import { FacultadComponent } from './Components/facultad/facultad.component';
import { FacultadEditComponent } from './Components/facultad-edit/facultad-edit.component';
import { TituloComponent } from './Components/titulo/titulo.component';
import { TituloEditComponent } from './Components/titulo-edit/titulo-edit.component';

const routes: Routes = [
  {
    path: 'empleados',
    component: EmpleadosComponent,
  },
  {
    path: 'empleados/edit/:id',
    component :EmpleadosEditComponent
  },
  {
    path: 'tipocapacitacion',
    component :TipocapacitacionComponent
  },
  {
    path: 'tipocapacitacion/edit/:id',
    component :TipocapacitacionEditComponent
  },
  {
    path: 'facultad',
    component :FacultadComponent
  },
  {
    path: 'facultad/edit/:id',
    component :FacultadEditComponent
  }, 
  {
    path: 'titulo',
    component :TituloComponent
  },
  {
    path: 'titulo/edit/:id',
    component :TituloEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
