
import { Component,OnInit } from '@angular/core';
import { Titulo } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-titulo-edit',
  standalone: true,
  imports: [],
  templateUrl: './titulo-edit.component.html',
  styleUrl: './titulo-edit.component.css'
})

  export class FacultadComponent implements OnInit{
    TUser: any = [];
    user: Titulo = {
      idtitulo:  null ,
      titulo: null,
      estado: 'Activo'
    }
  
  
  
  constructor(private Data: DataService) { }
  
    ngOnInit(): void {
      this.getUser();
    }
    getUser() {
      this.Data.getAll('/Titulo')
        .subscribe(res => {
            this.TUser = res;
          
          }, err => console.error(err));
    }
    AgregarValor(){
      delete this.user.idtitulo;   
      this.Data.save(this.user,'/Titulo')
         .subscribe(
           res => {
  
  this.getUser();
           },
           err => console.error(err)
         );
  }
    EliminarData(id: number){
      this.Data.delete(id, '/Titulo')
        .subscribe(
          res => {
            this.getUser();
          },
          err => console.error(err)
        );
    }
  
  }
  

