import { Component,OnInit } from '@angular/core';
import { Facultad } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-facultad',
  standalone: true,
  imports: [],
  templateUrl: './facultad.component.html',
  styleUrl: './facultad.component.css'
})

export class FacultadComponent implements OnInit{
  TUser: any = [];
  user: Facultad = {
    idfacultad:  null ,
    facultad: null,
  
    estado: 'Activo'
  }



constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/Facultad')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
  AgregarValor(){
    delete this.user.idfacultad;   
    this.Data.save(this.user,'/Facultad')
       .subscribe(
         res => {

this.getUser();
         },
         err => console.error(err)
       );
}
  EliminarData(id: number){
    this.Data.delete(id, '/Facultad')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

}
