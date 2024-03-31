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

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
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
