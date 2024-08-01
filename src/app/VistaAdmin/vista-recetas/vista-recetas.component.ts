import { Component } from '@angular/core';
import { Recetas } from 'src/app/models/Recetas';
import { getUniqueID } from 'src/app/Services/custom.functions';
import { RecetasService } from 'src/app/Services/recetas.service';

@Component({
  selector: 'app-vista-recetas',
  templateUrl: './vista-recetas.component.html',
  styleUrls: ['./vista-recetas.component.css']
})
export class VistaRecetasComponent {

  recetas!: Recetas[];
  formulario = {
    idReceta: '',
    titulo: '',
    descripcion: '',
    ingredientes: '',
    instrucciones: '',
    idTipoReceta: '',
  };

  registroExitoso = false;
  registroFallido = false;

  constructor(private registrarrecetas: RecetasService, registrarrecetasService: RecetasService) {
    this.obtenerRecetas();
  }

  obtenerRecetas() {
    console.log('Iniciando la obtención de recetas...');
    this.registrarrecetas.getDatos().subscribe(data => {
      this.recetas = data;
      console.log('Recetas obtenidas:', this.recetas);
    }, error => {
      console.error('Error al obtener las recetas:', error);
    });
  }

  eliminarRecetas(indice: number): void {
    console.log('Eliminando receta en el índice:', indice);
    const recetaEliminada = this.recetas.splice(indice, 1)[0];
    console.log('Receta eliminada:', recetaEliminada);
    // Puedes añadir lógica adicional para eliminar la receta del backend si es necesario
    // this.registrarrecetas.deleteDatos(recetaEliminada.idReceta).subscribe(...);
  }

  registrarRecetas(event: Event) {
    event.preventDefault();
    console.log('Iniciando el registro de una nueva receta...');
    
    const idReceta = getUniqueID();
    const titulo = (document.getElementById('f_titulo') as HTMLInputElement).value;
    const descripcion = (document.getElementById('f_descripcion') as HTMLInputElement).value;
    const ingredientes = (document.getElementById('f_ingredientes') as HTMLInputElement).value;
    const instrucciones = (document.getElementById('f_instrucciones') as HTMLInputElement).value;
    const idTipoReceta = (document.getElementById('f_idTipoReceta') as HTMLInputElement).value;

    const nuevaReceta: Recetas = {
      idReceta: idReceta,
      titulo: titulo,
      descripcion: descripcion,
      ingredientes: ingredientes,
      instrucciones: instrucciones,
      idTipoReceta: idTipoReceta,
    };

    console.log('Datos de la nueva receta:', nuevaReceta);

    this.registrarrecetas.postDatos(nuevaReceta).subscribe(response => {
      this.registroExitoso = true;
      this.registroFallido = false;
      console.log('Receta registrada con éxito:', response);

      // Reiniciar el formulario después de 5 segundos
      setTimeout(() => {
        this.formulario = {
          idReceta: '',
          titulo: '',
          descripcion: '',
          ingredientes: '',
          instrucciones: '',
          idTipoReceta: '',
        };
        this.registroExitoso = false; // Restablecer el estado de éxito
        console.log('Formulario reiniciado.');
      }, 5000);
      
    }, error => {
      this.registroExitoso = false;
      this.registroFallido = true;
      console.error('Error al registrar la receta:', error);
      console.log('Datos enviados:', nuevaReceta);
    });
  }
}
