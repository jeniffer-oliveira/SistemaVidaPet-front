import { Injectable } from '@angular/core';
import { Funcionario } from '../models/Funcionario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = 'http://localhost:3000/funcionarios'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.apiUrl)
  }
}

