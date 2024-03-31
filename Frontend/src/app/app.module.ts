import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmpleadosEditComponent } from './Components/empleados-edit/empleados-edit.component';
import { FilterempleadosPipe } from './Pipes/filterempleados.pipe';
import { NivelEduComponent } from './Components/niveledu/niveledu.component';
import { NivelEduEditComponent } from './Components/niveledu-edit/niveledu-edit.component';
import { EspecialidadComponent } from './Components/especialidad/especialidad.component';
import { EspecialidadEditComponent } from './Components/especialidad-edit/especialidad-edit.component';
import { NomcentroComponent } from './Components/nomcentro/nomcentro.component';
import { NomcentroEditComponent } from './Components/nomcentro-edit/nomcentro-edit.component';
import { TiponiveleduComponent } from './Components/tiponiveledu/tiponiveledu.component';
import { TiponiveleduEditComponent } from './Components/tiponiveledu-edit/tiponiveledu-edit.component';
import { TipocapacitacionComponent } from './Components/tipocapacitacion/tipocapacitacion.component';
import { TipocapacitacionEditComponent } from './Components/tipocapacitacion-edit/tipocapacitacion-edit.component';
import { FacultadComponent } from './Components/facultad/facultad.component';
import { FacultadEditComponent } from './Components/facultad-edit/facultad-edit.component';
import { TituloComponent } from './Components/titulo/titulo.component';
import { TituloEditComponent } from './Components/titulo-edit/titulo-edit.component';
import { CaparecibidaComponent } from './Components/caparecibida/caparecibida.component';
import { CaparecibidaEditComponent } from './Components/caparecibida-edit/caparecibida-edit.component';
import { FiltercaparecibidaPipe } from './Pipes/filtercaparecibida.pipe';
import { FilterespecialidadPipe } from './Pipes/filterespecialidad.pipe';
import { FilterfacultadPipe } from './Pipes/filterfacultad.pipe';
import { FilterniveleduPipe } from './Pipes/filterniveledu.pipe';
import { FilternomcentroPipe } from './Pipes/filternomcentro.pipe';
import { FiltertipocapacitacionPipe } from './Pipes/filtertipocapacitacion.pipe';
import { FiltertiponiveleduPipe } from './Pipes/filtertiponiveledu.pipe';
import { FiltertituloPipe } from './Pipes/filtertitulo.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './Components/navegacion/navegacion.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [AppComponent, EmpleadosComponent, EmpleadosEditComponent, FilterempleadosPipe, NivelEduComponent, NivelEduEditComponent, EspecialidadComponent, EspecialidadEditComponent, NomcentroComponent, NomcentroEditComponent, TiponiveleduComponent, TiponiveleduEditComponent, TipocapacitacionComponent, TipocapacitacionEditComponent, FacultadComponent, FacultadEditComponent, TituloComponent, TituloEditComponent, CaparecibidaComponent, CaparecibidaEditComponent, FiltercaparecibidaPipe, FilterespecialidadPipe, FilterfacultadPipe, FilterniveleduPipe, FilternomcentroPipe, FiltertipocapacitacionPipe, FiltertiponiveleduPipe, FiltertituloPipe, NavegacionComponent],
  imports: [BrowserModule,
     AppRoutingModule,
     HttpClientModule,
     FormsModule, 
     BrowserAnimationsModule, 
    MatButtonModule,
    MatMenuModule    
],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
