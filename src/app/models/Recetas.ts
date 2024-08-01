export interface Recetas{
    idReceta: string;
    titulo: string;
    descripcion: string;
    ingredientes: string;
    instrucciones: string;
    idTipoReceta: string;
    
  }
  
  
  
  
  export class Recetas {
    idReceta: string;
    titulo: string;
    descripcion: string;
    ingredientes: string;
    instrucciones: string; 
    idTipoReceta: string;
 

      constructor(idReceta: string, titulo: string, descripcion: string, ingredientes: string, instrucciones: string,idTipoReceta: string
      ) {
        this.idReceta = idReceta;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ingredientes = ingredientes;
        this.instrucciones = instrucciones;
        this.idTipoReceta = idTipoReceta;

      }
    }
    