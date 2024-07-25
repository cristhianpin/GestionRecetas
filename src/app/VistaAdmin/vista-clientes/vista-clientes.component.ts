import { Component } from '@angular/core';
import { Clientes } from 'src/app/models/Clientes';
import { ClientesService } from 'src/app/Services/clientes.service.spec';
import { getUniqueID } from 'src/app/Services/custom.functions';




@Component({
  selector: 'app-vista-clientes',
  templateUrl: './vista-clientes.component.html',
  styleUrls: ['./vista-clientes.component.css']
})
export class VistaClientesComponent {

  clientes!: Clientes[];

  formulario ={
    idcliente: '',
    nombre: '',
    correo: '',
    clave: '',
    telefono: '',
  };

  constructor(private registrarcliente: ClientesService, private registraclienteService : ClientesService){
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


  registrarCliente(event: Event){
    event.preventDefault();
    const idcliente = getUniqueID();
    const nombre = (document.getElementById('f_nombre') as HTMLInputElement).value;
    const correo = (document.getElementById('f_correo') as HTMLInputElement).value;
    const clave = (document.getElementById('f_clave') as HTMLInputElement).value;
    const telefono = (document.getElementById('f_telefono') as HTMLInputElement).value;
    //const id_usuario = '2'; // ? -> lo queria asignar pero me dicuenta que eso crea el error

    const nuevoregistro: Clientes = {
      IdCliente: idcliente,
      Nombre: nombre,
      Correo: correo,
      Clave: clave,
      telefono: telefono,
      //id_usuario: id_usuario

    };

    this.registraclienteService.postDatos(nuevoregistro)
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
              //id_usuario:'',
              
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

  eliminarCliente(indice:number): void{
    //this.listPersona.splice(id,1);
    const clienteeliminado = this.clientes.splice(indice, 1)[0];

    
      this.clientes.push(clienteeliminado);
  
    

  }


}
