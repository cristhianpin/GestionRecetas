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
  formulario ={
    idReceta: '',
    titulo: '',
    descripción: '',
    ingredientes: '',
    instrucciones: '',

  };

    constructor (private registrarrecetas: RecetasService, registrarrecetasService: RecetasService){
      this.obtenerrecetas();

    }

    
    registroExitoso = false;
    registroFallido = false;

    obtenerrecetas(){

      this.registrarrecetas.getDatos().subscribe(data =>{
        this.recetas = data;
        console.log(this.recetas)
      })
    }

    eliminarRecetas(indice:number): void{
      //this.listPersona.splice(id,1);
      const clienteeliminado = this.recetas.splice(indice, 1)[0];
  
      
        this.recetas.push(clienteeliminado);
    }

    registrarRecetas(event: Event){
        event.preventDefault();
        const idReceta = getUniqueID();
        const titulo = (document.getElementById('f_titulo') as HTMLInputElement).value;
        const descripcion = (document.getElementById('f_descripcion') as HTMLInputElement).value;
        const ingredientes = (document.getElementById('f_ingredientes') as HTMLInputElement).value;
        const instrucciones = (document.getElementById('f_instrucciones') as HTMLInputElement).value;

        const nuevoregistro: Recetas = {
          idReceta: idReceta,
          titulo: titulo,
          descripcion: descripcion,
          ingredientes: ingredientes,
          instrucciones: instrucciones,
      };
  

      this.registrarrecetas.postDatos(nuevoregistro)
    .subscribe(response =>{
    this.registroExitoso = true;
    this.registroFallido = false;


    console.log('registrado:', response);
    console.log('data ->', nuevoregistro);

        // Reiniciar el formulario después de 5 segundos
        setTimeout(() => {
          this.formulario = {
            idReceta: '',
            titulo: '',
            descripción: '',
            ingredientes: '',
            instrucciones: '',
            
          };
          this.registroExitoso = false; // Restablecer el estado de éxito
        }, 5000);


      },error => {
        this.registroExitoso = false;
        this.registroFallido = true;
        console.error('Error al registrar el cliente:', error);
        console.log("cliente -> ", nuevoregistro )
    
    })


    }

}
