import { Component,OnInit } from '@angular/core';
import { Nomcentro } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nomcentro-edit',
  templateUrl: './nomcentro-edit.component.html',
  styleUrls: ['./nomcentro-edit.component.css']
})
export class NomcentroEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: Nomcentro= {
    idnomcentro:  null ,
    nomcentro: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/nomcentro')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.idnomcentro!, this.user,'/nomcentro')
        .subscribe(
          res => {
            this.router.navigate(['/nomcentro']);
          },
          err => console.error(err)
        );
    }  
  }
