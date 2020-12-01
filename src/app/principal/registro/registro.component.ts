import { Component, OnInit } from '@angular/core';
import { UserService} from '../../servicios/user/user.service';
import { FormGroup, FormBuilder, Validators, FormControl,FormsModule } from '@angular/forms';
import {Alumno} from '../../datos/alumno';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.pug',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  alumno = new FormGroup({
    nombre: new FormControl('', ),
    ape_pat: new FormControl('', ),
    ape_mat: new FormControl('', ),
    grado2: new FormControl('', ),
    fecha: new FormControl('', ),
    edad: new FormControl('', ),
    ruta: new FormControl('', )
  });

  grado: any;
  constructor(
    private userService: UserService
  ) {
    this.userService.grado$.subscribe(data => {
      this.grado = data
    })
   }

  ngOnInit(): void {
  }

  agregarAlumno(){
    console.log(this.alumno.controls.nombre.value)
    if(this.alumno.valid){
      const al = new Alumno();
      al.nom_persona = this.alumno.controls.nombre.value;
      al.ape_pate_pers = this.alumno.controls.ape_pat.value;
      al.ape_mate_pers = this.alumno.controls.ape_mat.value;
      al.nid_grado = this.alumno.controls.grado2.value;
      al.fecha_naci = this.alumno.controls.fecha.value;
      this.userService.insertarAlumno(al).toPromise().then((result:any) => {
        if(result.status == 200){
          this.userService.añadirColaAlumno(al);
          alert('Usuario agregado correctamente');
        }
      }).catch(e => {
        console.log(e);
        alert('Error: '+e);
      })
      this.alumno.reset();
      
    }else{
      alert('Ingrese los campos requeridos');
    }
  }

  getEdad($event){
    const fecha_ingreso = new Date($event.value);
    const fecha_actual = new Date();
    let edad = fecha_actual.getFullYear() - fecha_ingreso.getFullYear();
    let meses = (fecha_actual.getMonth()+1) - (fecha_ingreso.getMonth()+1);
    if(meses < 0){
      edad--;
      meses = (12 - (-1*meses));
    }
    this.alumno.controls.edad.setValue(edad+' año(s) '+ meses+' mes(es)')
  }

}
