import { Component,OnInit } from '@angular/core';
import { Titulo } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-titulo-edit',
  templateUrl: './titulo-edit.component.html',
  styleUrls: ['./titulo-edit.component.css']
})
export class TituloEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: Titulo= {
    idtitulo:  null ,
    titulo: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/titulo')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.idtitulo!, this.user,'/titulo')
        .subscribe(
          res => {
            this.router.navigate(['/titulo']);
          },
          err => console.error(err)
        );
    }  
  }