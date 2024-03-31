import { Component,OnInit } from '@angular/core';
import { Tiponiveledu } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tiponiveledu-edit',
  templateUrl: './tiponiveledu-edit.component.html',
  styleUrls: ['./tiponiveledu-edit.component.css']
})
export class TiponiveleduEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: Tiponiveledu= {
    idtiponiveledu:  null ,
    tiponiveledu: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/tiponiveledu')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.idtiponiveledu!, this.user,'/tiponiveledu')
        .subscribe(
          res => {
            this.router.navigate(['/tiponiveledu']);
          },
          err => console.error(err)
        );
    }  
  }