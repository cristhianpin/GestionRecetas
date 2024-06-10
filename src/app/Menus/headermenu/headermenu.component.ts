import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService} from '../../Services/data.service'



@Component({
  selector: 'app-headermenu',
  templateUrl: './headermenu.component.html',
  styleUrls: ['./headermenu.component.css']
})
export class HeadermenuComponent {
 
  constructor(private router: Router, private _dataService: DataService) {}

  logout() {

    // Ejemplo de lógica de cierre de sesión:
    // authService.logout();
    this._dataService.permiso$.emit('true')
    this.router.navigate(['/AcercaDe']);
    
  }

}