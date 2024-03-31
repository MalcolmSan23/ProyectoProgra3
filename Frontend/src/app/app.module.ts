import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { DataService } from './Services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // Importa HTTP_INTERCEPTORS
import { FormsModule } from '@angular/forms';
import { EmpleadosEditComponent } from './Components/empleados-edit/empleados-edit.component';
import { FilterempleadosPipe } from './Pipes/filterempleados.pipe';
import { LoginComponent } from './Components/login/login.component';
import { JwtInterceptor } from './interceptor/jwt.interceptor'; // Importa el interceptor JWT

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadosEditComponent,
    FilterempleadosPipe,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, // Agrega JwtInterceptor a los proveedores
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
