export class Alumno{
    nom_persona: string;
    ape_pate_pers: string;
    ape_mate_pers: string;
    nid_grado: number;
    fecha_naci: Date;
    foto_ruta: string;
    constructor(){
        this.foto_ruta = 'default';
    }
}