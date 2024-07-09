import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reporte01DTO } from '../model/Reporte01DTO';
import { Reporte02DTO } from '../model/Reporte02DTO';
const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class Reporte01Service {
  private url = `${base_url}`;

  constructor(private http: HttpClient) {}
  getContar(): Observable<Reporte01DTO[]> {
    let token = sessionStorage.getItem('token');
    return this.http.get<Reporte01DTO[]>(`${this.url}/gastos/contar`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  getSumar(): Observable<Reporte02DTO[]> {
    let token = sessionStorage.getItem('token');
    return this.http.get<Reporte02DTO[]>(`${this.url}/gastos/sumar`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

}
