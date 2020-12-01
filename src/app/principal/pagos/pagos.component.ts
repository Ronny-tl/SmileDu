import { Component, OnInit,Input,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MAlumnoComponent} from '../m-alumno/m-alumno.component';
import {UserService} from '../../servicios/user/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.pug',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  filterAlumno = '';
  @Input() alumnos;
  @Input() grado;
  alumnoSeleccionado:any;
  movimiento:any;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['accion', 'pension', 'monto', 'estado'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) {
    this.userService.alumnoSeleccionado$.subscribe(data => {
      if(data != undefined && data != null ){
        this.alumnoSeleccionado = data;
        this.userService.getMovimiento(data).toPromise().then((result:any) => {
          this.movimiento = result;
          console.log('RESULTADO',result);
          this.dataSource = new MatTableDataSource(this.movimiento);
          this.dataSource.paginator = this.paginator;
        })
      }
    })
   }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(MAlumnoComponent,{
      height: 'auto',
      width: '720px', 
    });
  }

}
