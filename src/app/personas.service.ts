import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
@Output() idEnvio: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get<any>('https://prueba-tec-ruben.herokuapp.com/api/personas');
  }

  public getDetalle(id: number): Observable<any> {
    return this.http.get<any>('https://prueba-tec-ruben.herokuapp.com/api/detallePersona/'+id );
  }
}