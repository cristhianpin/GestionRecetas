import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../models/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'https://localhost:7174/api'; // URL de tu API


  constructor(private http: HttpClient) { }

  agregarProducto(clientes: Clientes) {
    return this.http.post(this.apiUrl, clientes);
  }

  getDatos(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/Clientes`);
    
  }

  postDatos(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Clientes`, datos);
  }
}
