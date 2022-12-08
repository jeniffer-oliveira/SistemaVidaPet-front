import { Injectable } from '@angular/core';
import { Service } from '../models/Servico';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private apiUrl: 'ttp://localhost:3000/servicos'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Service[]>{
    return this.http.get<Service[]>(this.apiUrl)
  }
}
