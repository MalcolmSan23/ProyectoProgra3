import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, EmpleadosComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
