import { Component, OnInit } from '@angular/core';
import { Tipocapacitacion } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-tipocapacitacion',
  templateUrl: './tipocapacitacion.component.html',
  styleUrls: ['./tipocapacitacion.component.css']
})
export class TipocapacitacionComponent implements OnInit {

  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  name = 'tipocapacitacion.xlsx';

  TUser: any = [];
  user: Tipocapacitacion = {
    idtipocapa:  null ,
    tipocapa: null,
    estado: 'Activo'
  }

  constructor(private authService: AuthService, private router: Router, private Data: DataService) { }

  
  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/tipocapacitacion')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
  AgregarValor(){
    delete this.user.idtipocapa;   
    this.Data.save(this.user,'/tipocapacitacion')
       .subscribe(
         res => {

this.getUser();
         },
         err => console.error(err)
       );
}
  EliminarData(id: number){
    this.Data.delete(id, '/tipocapacitacion')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
  exportToExcel(): void {
    let element = document.getElementById('tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.name);
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('tabla');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('tipocapacitacion.pdf');
    });
  }

}
