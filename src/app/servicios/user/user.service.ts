import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private grado: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public grado$ = this.grado.asObservable();

  private alumnos: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public alumnos$ = this.alumnos.asObservable();

  public alumnoSeleccionado: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  public alumnoSeleccionado$ = this.alumnoSeleccionado.asObservable();

  alumnosTemp:any;
  constructor(
    private http: HttpClient
  ) { }

  
  getGrado(){
    const url = "http://localhost:3000/grado";
    this.http.get(url).subscribe(result => {
      this.grado.next(result);
    })
  }

  getMovimiento(data){
    const url = "http://localhost:3000/movimiento";
    return this.http.post(url,data);
  }

  insertarAlumno(data){
      const url = "http://localhost:3000/alumnoinsertar";
      return this.http.post(url,data);

  }

  getAlumnos(){
    const url = "http://localhost:3000/getalumnos";
    this.http.get(url).subscribe(result => {
      this.alumnosTemp = result;
      this.alumnos.next(result);
    })
  }

  añadirColaAlumno(data){
    this.alumnosTemp.push(data);
    this.alumnos.next(this.alumnosTemp);
  }
}
