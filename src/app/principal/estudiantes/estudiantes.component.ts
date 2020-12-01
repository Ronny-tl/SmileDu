import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RegistroComponent} from '../registro/registro.component';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.pug',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
@Input() alumnos;
@Input() grado;
filterAlumno = '';
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(RegistroComponent);
  }

  getEdad(item){
    const fecha_ingreso = new Date(item);
    const fecha_actual = new Date();
    let edad = fecha_actual.getFullYear() - fecha_ingreso.getFullYear();
    let meses = (fecha_actual.getMonth()+1) - (fecha_ingreso.getMonth()+1);
    if(meses < 0){
      edad--;
      meses = (12 - (-1*meses));
    }
    return edad +' año(s) '+ meses+' mes(es)';
  }

  findGrado(id){
    let result  =  this.grado.find(i => {return i.nid_grado == id});
    return result.desc_grado;
  }

}
