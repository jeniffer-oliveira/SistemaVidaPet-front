import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = ' http://localhost:3000/clientes'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl)
  }
}
