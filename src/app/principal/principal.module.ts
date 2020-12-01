import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { PrincipalComponent} from './principal.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { RegistroComponent } from './registro/registro.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule} from '../pipes/pipes.module';
import {FormsModule} from '@angular/forms';
import { PagosComponent } from './pagos/pagos.component';
import { MAlumnoComponent } from './m-alumno/m-alumno.component';
@NgModule({
  declarations: [PrincipalComponent, EstudiantesComponent,RegistroComponent, PagosComponent, MAlumnoComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    PipesModule,
    FormsModule
  ],exports: [
    MaterialModule,
    PipesModule
  ]

})
export class PrincipalModule { }
