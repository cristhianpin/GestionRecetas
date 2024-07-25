import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recetas } from '../models/Recetas';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private apiUrl = 'https://localhost:7174/api'; // URL de tu API


  constructor(private http: HttpClient) { }

  agregarProducto(recetas: Recetas) {
    return this.http.post(this.apiUrl, recetas);
  }

  getDatos(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/Recetas`);
    
  }

  postDatos(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Recetas`, datos);
  }
}
