import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService} from '../../Services/data.service'


@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.css']
})
export class HeaderadminComponent {
  constructor(private router: Router, private _dataService: DataService) {}

  logout() {

    // Ejemplo de lógica de cierre de sesión:
    // authService.logout();
    this._dataService.permiso$.emit('true')
    this.router.navigate(['/home']);
    
  }


}
