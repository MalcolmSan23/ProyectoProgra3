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
  }