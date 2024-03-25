import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { EmpleadosEditComponent } from './Components/empleados-edit/empleados-edit.component';

const routes: Routes = [
  {
    path: 'empleados',
    component: EmpleadosComponent,
  },
  {
    path: 'empleados/edit/:id',
    component :EmpleadosEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
