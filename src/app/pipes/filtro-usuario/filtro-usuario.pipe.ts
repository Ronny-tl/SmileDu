import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUsuario'
})
export class FiltroUsuarioPipe implements PipeTransform {

  transform(value: any, arg:any): any {
    const result = [];
    if(arg != ''){
      for(const post of value){
        if(post.nom_persona.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          result.push(post);
        }
      }
      return result;
    }else{
      return value;
    }
  }

}
