import { Component, OnInit,ViewChild } from '@angular/core';
import {UserService} from '../../servicios/user/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-m-alumno',
  templateUrl: './m-alumno.component.pug',
  styleUrls: ['./m-alumno.component.css']
})
export class MAlumnoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'grado', 'accion'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selectedPerson:any;
  alumnos:any;
  grado:any;
  constructor(
    private userService: UserService
  ) { 
    this.userService.alumnos$.subscribe(data => {
      this.alumnos = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    this.userService.grado$.subscribe(data => {
      this.grado = data;
    })
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

  seleccionarPostulante(){
    if(this.selectedPerson){
      this.userService.alumnoSeleccionado.next(this.selectedPerson);
    }else{
      alert('Seleccione un alumno');
    }
  }

  findGrado(id){
    let result  =  this.grado.find(i => {return i.nid_grado == id});
    return result.desc_grado;
  }

}
