export interface Clientes{
    IdCliente: string;
    Nombre: string;
    Correo: string;
    Clave: string;
    telefono: string;
    //id_usuario: string;
  
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
    