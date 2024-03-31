import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { EmpleadosEditComponent } from './Components/empleados-edit/empleados-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {
    path: 'empleados',
    component: EmpleadosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'empleados/edit/:id',
    component :EmpleadosEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component :LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
