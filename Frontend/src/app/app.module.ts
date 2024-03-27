import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmpleadosEditComponent } from './Components/empleados-edit/empleados-edit.component';
import { TipocapacitacionComponent } from './Components/tipocapacitacion/tipocapacitacion.component';
import { FilterempleadosPipe } from './Pipes/filterempleados.pipe';
import { TipocapacitacionEditComponent } from './Components/tipocapacitacion-edit/tipocapacitacion-edit.component';
import { TituloComponent } from './Components/titulo/titulo.component';
import { TituloEditComponent } from './Components/titulo-edit/titulo-edit.component';
import { FacultadComponent } from './Components/facultad/facultad.component';
import { FacultadEditComponent } from './Components/facultad-edit/facultad-edit.component';
import { FilterfacultadPipe } from './Pipes/filterfacultad.pipe';
import { FiltertipocapacitacionPipe } from './Pipes/filtertipocapacitacion.pipe';
import { FiltertituloPipe } from './Pipes/filtertitulo.pipe';

@NgModule({
  declarations: [AppComponent, EmpleadosComponent, EmpleadosEditComponent, TipocapacitacionComponent,TipocapacitacionEditComponent
  ,TituloComponent,TituloEditComponent,FacultadComponent,FacultadEditComponent,FilterfacultadPipe,FiltertipocapacitacionPipe, FiltertituloPipe,FilterempleadosPipe],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
