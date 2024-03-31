import { Component,OnInit } from '@angular/core';
import { Tipocapacitacion } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipocapacitacion-edit',
  templateUrl: './tipocapacitacion-edit.component.html',
  styleUrls: ['./tipocapacitacion-edit.component.css']
})
export class TipocapacitacionEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: Tipocapacitacion= {
    idtipocapa:  null ,
    tipocapa: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/tipocapacitacion')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.idtipocapa!, this.user,'/tipocapacitacion')
        .subscribe(
          res => {
            this.router.navigate(['/tipocapacitacion']);
          },
          err => console.error(err)
        );
    }  
  }