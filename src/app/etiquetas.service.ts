import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get<any>('https://prueba-tec-ruben.herokuapp.com/api/etiquetas');
  }
  public getEtiquetas(id: number, level: number, previousLevels: string): Observable<any> {
    return this.http.get<any>('https://prueba-tec-ruben.herokuapp.com/api/etiquetas/'+id +'/' + level +'/'+ previousLevels );
  }
}
