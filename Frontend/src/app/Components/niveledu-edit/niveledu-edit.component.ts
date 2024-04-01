import { Component,OnInit } from '@angular/core';
import { NivelEdu } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-niveledu-edit',
  templateUrl: './niveledu-edit.component.html',
  styleUrls: ['./niveledu-edit.component.css']
})
export class NivelEduEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: NivelEdu = {
    idniveledu:  null ,
    nombrenivel: null,
    idtiponiveledu: null,
    idespecial: null,
    idnomcentro: null,
    fobtenido: null,
    estado: 'Activo'
  }


  Tiponiveledu: any;
  Especialidad: any;
  Nomcentro: any;
  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/niveledu')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    this.getDropListTiponiveledu();
    this.getDropListEspecialidad();
    this.getDropListNomcentro();
    }
    updateUser() {
      this.Data.update(this.user.idniveledu!, this.user,'/niveledu')
        .subscribe(
          res => {
            this.router.navigate(['/niveledu']);
          },
          err => console.error(err)
        );
    }  
    getDropListNomcentro() {
      this.Data.getDropListNomcentro().subscribe((data: any) => {
        this.Nomcentro = data;
      });
    }
    getDropListEspecialidad() {
      this.Data.getDropListEspecialidad().subscribe((data: any) => {
        this.Especialidad = data;
      });
    }
    getDropListTiponiveledu() {
      this.Data.getDropListTiponiveledu().subscribe((data: any) => {
        this.Tiponiveledu = data;
      });
    }
  }