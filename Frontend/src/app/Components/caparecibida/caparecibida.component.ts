import { Component, OnInit } from '@angular/core';
import { Caparecibida } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-caparecibida',
  templateUrl: './caparecibida.component.html',
  styleUrls: ['./caparecibida.component.css']
})
export class CaparecibidaComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  name = 'caparecibida.xlsx';

  TUser: any = [];
  user: Caparecibida = {
    idcapa: null,
     CI: null,
    idtitulo: null,
     idtipocapa: null,
    finicio:  null,
   ffin: null,
  idnomcentro: null,
  idfacultad:  null,
  tomo:null,
  folio: null,
  estado: 'Activo'
  }
//tablas dropdownlist
Empleados: any;
Titulo: any;
Tipocapacitacion: any;
Nomcentro: any;
Facultad: any;
  constructor(private authService: AuthService, private router: Router, private Data: DataService) { }

  
  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  ngOnInit(): void {
    this.getDropListEmpleados();
    this.getDropListTitulo();
    this.getDropListTipocapacitacion();
    this.getDropListNomcentro();
    this.getDropListFacultad();
    this.getUser();
  }
  getDropListEmpleados() {
    this.Data.getDropListEmpleados().subscribe((data: any) => {
      this.Empleados = data;
    });
  }
  getDropListTitulo() {
    this.Data.getDropListTitulo().subscribe((data: any) => {
      this.Titulo = data;
    });
  }
  getDropListTipocapacitacion() {
    this.Data.getDropListTipocapacitacion().subscribe((data: any) => {
      this.Tipocapacitacion = data;
    });
  }
  getDropListNomcentro() {
    this.Data.getDropListNomcentro().subscribe((data: any) => {
      this.Nomcentro = data;
    });
  }
  getDropListFacultad() {
    this.Data.getDropListFacultad().subscribe((data: any) => {
      this.Facultad = data;
    });
  }
  getUser() {
    this.Data.getAll('/caparecibida')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
  AgregarValor(){
    delete this.user.idcapa;   
    this.Data.save(this.user,'/caparecibida')
       .subscribe(
         res => {

this.getUser();
         },
         err => console.error(err)
       );
}
  EliminarData(id: number){
    this.Data.delete(id, '/caparecibida')
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
      PDF.save('caparecibida.pdf');
    });
  }

}
