import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroUsuarioPipe } from './filtro-usuario/filtro-usuario.pipe';



@NgModule({
  declarations: [FiltroUsuarioPipe],
  imports: [
    CommonModule
  ],exports: [
    FiltroUsuarioPipe
  ]
})
export class PipesModule { }
