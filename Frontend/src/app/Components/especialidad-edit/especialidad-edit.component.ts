import { Component,OnInit } from '@angular/core';
import { Especialidad } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-especialidad-edit',
  templateUrl: './especialidad-edit.component.html',
  styleUrls: ['./especialidad-edit.component.css']
})
export class EspecialidadEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: Especialidad= {
    idespecialidad:  null ,
    especialidad: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/especialidad')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.idespecialidad!, this.user,'/especialidad')
        .subscribe(
          res => {
            this.router.navigate(['/especialidad']);
          },
          err => console.error(err)
        );
    }  
  }

  
