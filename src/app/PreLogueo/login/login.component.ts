import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService} from '../../Services/data.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  loadingData!: string;

  
  constructor( private router: Router, private _dataService: DataService) {
    this.username = '';
    this.password = '';
  }


  login() {

    this._dataService.permiso$.emit('false')
    this.router.navigate(['/Menu']); // Navegar a la página de inicio


  }

}
