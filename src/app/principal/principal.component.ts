import { Component, OnInit } from '@angular/core';
import { UserService} from '../servicios/user/user.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.pug',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  alumnos:any;

  grado:any;

  constructor(
    private userService: UserService
  ) { 
    ///// get ALUMNOS
    this.userService.alumnos$.subscribe(data => {
      console.log('ALUMNOS',data)
      this.alumnos = data;
    }),
    ///// get GRADO
    this.userService.grado$.subscribe(data => {
      this.grado = data;
    })
  }

  ngOnInit(): void {
  }



}
