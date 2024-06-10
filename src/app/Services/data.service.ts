import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  permiso$ = new EventEmitter<string>();
  constructor() { }
}
