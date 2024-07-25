export interface Recetas{
    IdRecata: number;
    Titulo: string;
    Descripción: string;
    Ingredientes: string;
    Instrucciones: string;
    //id_usuario: string;
  
  }
  
  
  
  
  export class Cliente {
    idcreceta: number;
    titulo: string;
    descripcion: string;
    ingredientes: string;
    instrucciones: string;  

      constructor(idreceta: number, titulo: string, descripcion: string, ingredientes: string, instrucciones: string ) {
        this.idcreceta = idreceta;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ingredientes = ingredientes;
        this.instrucciones = instrucciones;

      }
    }
    