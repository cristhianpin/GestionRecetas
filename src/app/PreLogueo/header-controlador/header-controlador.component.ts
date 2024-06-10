import { Component } from '@angular/core';
import { DataService} from '../../Services/data.service';


@Component({
  selector: 'app-header-controlador',
  templateUrl: './header-controlador.component.html',
  styleUrls: ['./header-controlador.component.css']
})
export class HeaderControladorComponent {

  permisoPadre: String="true";

  constructor(private _dataServices: DataService){};

  ngOnInit(){
    this._dataServices.permiso$.subscribe(texto => {
      this.permisoPadre = texto;
      console.log('estadoPermiso:',texto); 
    })
  }

}
