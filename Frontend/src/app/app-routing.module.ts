import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { EmpleadosEditComponent } from './Components/empleados-edit/empleados-edit.component';
import { EspecialidadComponent } from './Components/especialidad/especialidad.component';
import { EspecialidadEditComponent } from './Components/especialidad-edit/especialidad-edit.component';
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
import { NavegacionComponent } from './Components/navegacion/navegacion.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'empleados',
    component: EmpleadosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'empleados/edit/:id',
    component: EmpleadosEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'especialidad',
    component: EspecialidadComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'especialidad/edit/:id',
    component: EspecialidadEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'niveledu',
    component: NivelEduComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'niveledu/edit/:id',
    component: NivelEduEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'caparecibida',
    component: CaparecibidaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'caparecibida/edit/:id',
    component: CaparecibidaEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'facultad',
    component: FacultadComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'facultad/edit/:id',
    component: FacultadEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'nomcentro',
    component: NomcentroComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'nomcentro/edit/:id',
    component: NomcentroEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tipocapacitacion',
    component: TipocapacitacionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tipocapacitacion/edit/:id',
    component: TipocapacitacionEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tiponiveledu',
    component: TiponiveleduComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tiponiveledu/edit/:id',
    component: TiponiveleduEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'titulo',
    component: TituloComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'titulo/edit/:id',
    component: TituloEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'navegacion',
    component: NavegacionComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
