import { Component } from '@angular/core';
import { Clientes } from 'src/app/models/Clientes';
import { ClientesService } from 'src/app/Services/cliente.service';
import { getUniqueID } from 'src/app/Services/custom.functions';

@Component({
  selector: 'app-registraclientes',
  templateUrl: './registraclientes.component.html',
  styleUrls: ['./registraclientes.component.css']
})
export class RegistraclientesComponent {

    clientes!: Clientes[];

    formulario ={

    idcliente: '',
    nombre: '',
    correo: '',
    clave: '',
    telefono: '', 
    };


    constructor (private registrarcliente: ClientesService, private registrarclienteService: ClientesService){
      this.obtenerclientes();
    }

    registroExitoso = false;
    registroFallido = false;

    obtenerclientes(){

      this.registrarcliente.getDatos().subscribe(data =>{
        this.clientes = data;
        console.log(this.clientes)
      })
    }

    eliminarCliente(indice:number): void{
      //this.listPersona.splice(id,1);
      const clienteeliminado = this.clientes.splice(indice, 1)[0];
  
      
        this.clientes.push(clienteeliminado);
    }

     registrarCliente(event: Event){

      event.preventDefault();
      const idcliente = getUniqueID();
      const nombre = (document.getElementById('f_nombre') as HTMLInputElement).value;
      const correo = (document.getElementById('f_correo') as HTMLInputElement).value;
      const clave = (document.getElementById('f_clave') as HTMLInputElement).value;
      const telefono = (document.getElementById('f_telefono') as HTMLInputElement).value;

      const nuevoregistro: Clientes = {
        idCliente: idcliente,
        nombre: nombre,
        correo: correo,
        clave: clave,
        telefono: telefono,
    };


    this.registrarclienteService.postDatos(nuevoregistro)
    .subscribe(response =>{
    this.registroExitoso = true;
    this.registroFallido = false;


    console.log('registrado:', response);
    console.log('data ->', nuevoregistro);

        // Reiniciar el formulario después de 5 segundos
        setTimeout(() => {
          this.formulario = {
            idcliente: '',
            nombre: '',
            correo: '',
            clave: '',
            telefono: '',
            
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
