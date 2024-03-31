import { Component,OnInit } from '@angular/core';
import { Facultad } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facultad-edit',
  templateUrl: './facultad-edit.component.html',
  styleUrls: ['./facultad-edit.component.css']
})
export class FacultadEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: Facultad= {
    idfacultad:  null ,
    facultad: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/facultad')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.idfacultad!, this.user,'/facultad')
        .subscribe(
          res => {
            this.router.navigate(['/facultad']);
          },
          err => console.error(err)
        );
    }  
  }
