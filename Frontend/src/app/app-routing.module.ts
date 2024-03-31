import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { EmpleadosEditComponent } from './Components/empleados-edit/empleados-edit.component';
import { EspecialidadComponent } from './Components/especialidad/especialidad.component';
import { EspecialidadEditComponent} from './Components/especialidad-edit/especialidad-edit.component';
import { NivelEduComponent } from './Components/niveledu/niveledu.component';
import { NivelEduEditComponent } from './Components/niveledu-edit/niveledu-edit.component';
import { CaparecibidaComponent } from './Components/caparecibida/caparecibida.component';
import { CaparecibidaEditComponent } from './Components/caparecibida-edit/caparecibida-edit.component';
import { FacultadComponent } from './Components/facultad/facultad.component';
import { FacultadEditComponent } from './Components/facultad-edit/facultad-edit.component';
import { NomcentroComponent } from './Components/nomcentro/nomcentro.component';
import { NomcentroEditComponent } from './Components/nomcentro-edit/nomcentro-edit.component';
import { TipocapacitacionComponent } from './Components/tipocapacitacion/tipocapacitacion.component';
import { TipocapacitacionEditComponent } from './Components/tipocapacitacion-edit/tipocapacitacion-edit.component';
import { TiponiveleduComponent } from './Components/tiponiveledu/tiponiveledu.component';
import { TiponiveleduEditComponent } from './Components/tiponiveledu-edit/tiponiveledu-edit.component';
import { TituloComponent } from './Components/titulo/titulo.component';
import { TituloEditComponent } from './Components/titulo-edit/titulo-edit.component';
import { NavegacionComponent} from './Components/navegacion/navegacion.component';

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
    path: 'especialidad',
    component: EspecialidadComponent,
  },
  {
    path: 'especialidad/edit/:id',
    component :EspecialidadEditComponent
  },
  {
    path: 'niveledu',
    component: NivelEduComponent,
  },
  {
    path: 'niveledu/edit/:id',
    component :NivelEduEditComponent,
  },
  {
    path: 'caparecibida',
    component: CaparecibidaComponent,
  },
  {
    path: 'caparecibida/edit/:id',
    component :CaparecibidaEditComponent,
  },
  {
    path: 'facultad',
    component: FacultadComponent,
  },
  {
    path: 'facultad/edit/:id',
    component :FacultadEditComponent,
  },
  {
    path: 'nomcentro',
    component: NomcentroComponent,
  },
  {
    path: 'nomcentro/edit/:id',
    component : NomcentroEditComponent,
  },
  {
    path: 'tipocapacitacion',
    component: TipocapacitacionComponent,
  },
  {
    path: 'tipocapacitacion/edit/:id',
    component : TipocapacitacionEditComponent,
  },
  {
    path: 'tiponiveledu',
    component: TiponiveleduComponent,
  },
  {
    path: 'tiponiveledu/edit/:id',
    component : TiponiveleduEditComponent,
  },
  {
    path: 'titulo',
    component: TituloComponent,
  },
  {
    path: 'titulo/edit/:id',
    component : TituloEditComponent,
  },
  {
    path: 'navegacion',
    component:NavegacionComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
