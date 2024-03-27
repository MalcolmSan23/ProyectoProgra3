
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Tipocapacitacion } from 'src/app/Interface/user';

@Component({
  selector: 'app-tipocapacitacion',
  standalone: true,
  imports: [],
  templateUrl: './tipocapacitacion.component.html',
  styleUrl: './tipocapacitacion.component.css'
})
export class TipocapacitacionComponent implements OnInit {

  TUser: any = [];
  user: Tipocapacitacion = {
    idtipocapa:  null ,
    tipocapa:null,
  
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/Tipocapacitacion')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
  AgregarValor(){
    delete this.user.idtipocapa;   
    this.Data.save(this.user,'/Tipocapacitacion')
       .subscribe(
         res => {

this.getUser();
         },
         err => console.error(err)
       );
}
  EliminarData(id: number){
    this.Data.delete(id, '/Tipocapacitacion')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}


