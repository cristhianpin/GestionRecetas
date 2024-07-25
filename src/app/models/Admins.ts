export interface Admins{
    IdAdmin: number;
    Nombre: string;
    Correo: string;
    Clave: string;
    
  }
  
  
  
  
  export class Admins {
    idadmin: number;
    nombre: string;
    correo: string;
    clave: string;

      constructor(idadmin: number, nombre: string, correo: string, clave: string ) {
        this.idadmin = idadmin;
        this.nombre = nombre;
        this.correo = correo;
        this.clave = clave;

      }
    }
    