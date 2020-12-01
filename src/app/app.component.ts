import { Component,OnInit } from '@angular/core';
import {UserService} from './servicios/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smiledu8';
  constructor(
    private userService: UserService
  ){

  }
  ngOnInit(){
    this.userService.getGrado();
    this.userService.getAlumnos();
  }
}
