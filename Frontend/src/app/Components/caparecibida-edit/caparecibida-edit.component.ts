import { Component,OnInit } from '@angular/core';
import { Caparecibida } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caparecibida-edit',
  templateUrl: './caparecibida-edit.component.html',
  styleUrls: ['./caparecibida-edit.component.css']
})
export class CaparecibidaEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: Caparecibida= {
    idcapa: null,
    CI: null,
   idtitulo: null,
   idtipocapa: null,
   finicio:  null,
   ffin: null,
   idnomcentro: null,
   idfacultad:  null,
   tomo:null,
   folio: null,
   estado: 'Activo'
  }


  Empleados: any;
Titulo: any;
Tipocapacitacion: any;
Nomcentro: any;
Facultad: any;

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDropListEmpleados();
    this.getDropListTitulo();
    this.getDropListTipocapacitacion();
    this.getDropListNomcentro();
    this.getDropListFacultad();
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/caparecibida')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }

    getDropListEmpleados() {
      this.Data.getDropListEmpleados().subscribe((data: any) => {
        this.Empleados = data;
      });
    }
    getDropListTitulo() {
      this.Data.getDropListTitulo().subscribe((data: any) => {
        this.Titulo = data;
      });
    }
    getDropListTipocapacitacion() {
      this.Data.getDropListTipocapacitacion().subscribe((data: any) => {
        this.Tipocapacitacion = data;
      });
    }
    getDropListNomcentro() {
      this.Data.getDropListNomcentro().subscribe((data: any) => {
        this.Nomcentro = data;
      });
    }
    getDropListFacultad() {
      this.Data.getDropListFacultad().subscribe((data: any) => {
        this.Facultad = data;
      });
    }

    updateUser() {
      this.Data.update(this.user.idcapa!, this.user,'/caparecibida')
        .subscribe(
          res => {
            this.router.navigate(['/caparecibida']);
          },
          err => console.error(err)
        );
    }  
  }
