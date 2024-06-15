export class menu_receta {
    id_receta: number;
    nombre: string;
    ingredientes: string;
    preparacion: string;
    imagen: string;
    url: string;
    expanded: boolean;
  
    constructor(id_receta: number, nombre: string, ingredientes: string, preparacion: string, imagen: string, url: string){
      this.id_receta = id_receta;
      this.nombre = nombre;
      this.ingredientes = ingredientes;
      this.preparacion = preparacion;
      this.imagen = imagen;
      this.url = url;
      this.expanded = false;
    }
  }
  