import { Component  } from '@angular/core';
import { Empleados } from '../../Interface/user'
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleados-edit',
  templateUrl: './empleados-edit.component.html',
  styleUrls: ['./empleados-edit.component.css']
})
export class EmpleadosEditComponent  {
  valorInput: number | undefined;
  TUser: any = [];
  user: Empleados = {
    CI: undefined,
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

  constructor(
    private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/empleados').subscribe(
        (res: any) => {
          this.user = res;
        },
        (err) => console.log(err)
      );
    }
  }
  updateUser() {
    this.Data.update(this.user.CI!, this.user, '/empleados').subscribe(
      (res) => {
        this.router.navigate(['/empleados']);
      },
      (err) => console.error(err)
    );
  }
}
