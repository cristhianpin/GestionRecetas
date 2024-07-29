export interface Recetas{
    idReceta: string;
    titulo: string;
    descripcion: string;
    ingredientes: string;
    instrucciones: string;
    
  }
  
  
  
  
  export class Recetas {
    idReceta: string;
    titulo: string;
    descripcion: string;
    ingredientes: string;
    instrucciones: string;  

      constructor(idReceta: string, titulo: string, descripcion: string, ingredientes: string, instrucciones: string ) {
        this.idReceta = idReceta;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ingredientes = ingredientes;
        this.instrucciones = instrucciones;

      }
    }
    