import { Component, OnInit } from '@angular/core';
import { Empleados } from '../../Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  TUser: any = [];
  user: Empleados = {
    CI: 111,
    cipadre: null,
    nom1: null,
    nom2: null,
    ape1: null,
    ape2: null,
    sexo: null,
    dir: null,
    lugarnac: null,
    teldomicilio: null,
    email: null,
    etnia: null,
    estcivil: null,
    colorpelo: null,
    estatura: null,
    peso: null,
    idniveledu: null,
    cargo: null,
    contrato: null,
    departamento: null,
    ubicacion: null,
    foto: null,
    estado: 'activo',
    clave: null,
  };

  constructor(private Data: DataService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/empleados').subscribe(
      (res) => {
        this.TUser = res;
      },
      (err) => console.error(err)
    );
  }

  AgregarValor() {
    delete this.user.CI;
    this.Data.save(this.user, '/empleados').subscribe(
      (res) => {
        this.getUser();
      },
      (err) => console.error(err)
    );
  }
  EliminarData(id: number) {
    this.Data.delete(id, '/empleados').subscribe(
      (res) => {
        this.getUser();
      },
      (err) => console.error(err)
    );
  }
}
