export interface Clientes{
    idCliente: string;
    nombre: string;
    correo: string;
    clave: string;
    telefono: string;
    idUsuario: string;
  
  }
  
  
  
  
  export class Cliente {
    idcliente: number;
    nombre: string;
    correo: string;
    clave: string;
    telefono: string;  

      constructor(idcliente: number, nombre: string, correo: string, clave: string, telefono: string ) {
        this.idcliente = idcliente;
        this.nombre = nombre;
        this.correo = correo;
        this.clave = clave;
        this.telefono = telefono;

      }
    }
    