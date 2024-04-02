import { Component, OnInit } from '@angular/core';
import { Empleados } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';


import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-empleadosconsul',
  templateUrl: './empleadosconsul.component.html',
  styleUrls: ['./empleadosconsul.component.css'],
})
export class EmpleadosconsulComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';
  name = 'Empleados.xlsx';
  TUser: any = [];
  user: Empleados = {
    CI: null,
    cipadre: null,
    nom1: null,
    nom2: null,
    ape1: null,
    ape2: null,
    sexo: null,
    dir: null,
    lugarnac: null,
    teldomicilio: null,
    email: null,
    etnia: null,
    estcivil: null,
    colorpelo: null,
    estatura: null,
    peso: null,
    idniveledu: null,
    cargo: null,
    contrato: null,
    departamento: null,
    ubicacion: null,
    foto: null,
    estado: 'activo',
    clave: null,
  };

  NivelEdu: any;
  constructor(private authService: AuthService, private router: Router, private Data: DataService) { }

  
  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  ngOnInit(): void {
    this.getDropListNivelEdu();
    this.getUser();
  }

  getDropListNivelEdu() {
    this.Data.getDropListNivelEdu().subscribe((data: any) => {
      this.NivelEdu = data;
    });
  }

  getUser() {
    this.Data.getAll('/empleados').subscribe(
      (res) => {
        this.TUser = res;
      },
      (err) => console.error(err)
    );
  }

  AgregarValor() {
    delete this.user.CI;
    this.Data.save(this.user, '/empleados').subscribe(
      (res) => {
        this.getUser();
      },
      (err) => console.error(err)
    );
  }
  EliminarData(id: number) {
    this.Data.delete(id, '/empleados').subscribe(
      (res) => {
        this.getUser();
      },
      (err) => console.error(err)
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
      PDF.save('empresas.pdf');
    });
  }
}

