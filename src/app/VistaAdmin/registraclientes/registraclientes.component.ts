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

  formulario = {
    idcliente: '',
    nombre: '',
    correo: '',
    clave: '',
    telefono: '',
    idUsuario:'',
  };

  constructor(private registrarcliente: ClientesService, private registrarclienteService: ClientesService) {
    this.obtenerclientes();
  }

  registroExitoso = false;
  registroFallido = false;

  obtenerclientes() {
    this.registrarcliente.getDatos().subscribe(data => {
      this.clientes = data;
      console.log(this.clientes);
    });
  }

  eliminarCliente(indice: number): void {
    const clienteeliminado = this.clientes.splice(indice, 1)[0];
    this.clientes.push(clienteeliminado);
  }

  registrarCliente(event: Event) {
    event.preventDefault();
    const idcliente = getUniqueID();
    const nombre = (document.getElementById('f_nombre') as HTMLInputElement).value;
    const correo = (document.getElementById('f_correo') as HTMLInputElement).value;
    const clave = (document.getElementById('f_clave') as HTMLInputElement).value;
    const telefono = (document.getElementById('f_telefono') as HTMLInputElement).value;
    const idUsuario = (document.getElementById('f_idUsuario') as HTMLInputElement).value



    const nuevoregistro: Clientes = {
      idCliente: idcliente,
      nombre: nombre,
      correo: correo,
      clave: clave,
      telefono: telefono,
      idUsuario: idUsuario
    };

    console.log('Registro a enviar:', nuevoregistro); // Agregar un log antes de enviar

    this.registrarclienteService.postDatos(nuevoregistro)
      .subscribe(response => {
        this.registroExitoso = true;
        this.registroFallido = false;

        console.log('Registrado:', response);
        console.log('Data ->', nuevoregistro);

        // Reiniciar el formulario después de 5 segundos
        setTimeout(() => {
          this.formulario = {
            idcliente: '',
            nombre: '',
            correo: '',
            clave: '',
            telefono: '',
            idUsuario:''
          };
          this.registroExitoso = false; // Restablecer el estado de éxito
        }, 5000);
      }, error => {
        this.registroExitoso = false;
        this.registroFallido = true;
        console.error('Error al registrar el cliente:', error);
        console.log('Cliente -> ', nuevoregistro);
      });
  }
}
