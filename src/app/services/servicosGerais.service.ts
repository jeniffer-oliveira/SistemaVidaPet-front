import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionario';
import { Cliente } from '../models/Cliente';
import { Service } from '../models/Servico';
@Injectable({
  providedIn: 'root'
})
export class ServicosGeraisService {

  private apiUrlClientes = 'http://localhost:3000/clientes';
  private apiUrlFuncionarios = "http://localhost:3000/funcionarios";
  private apiUrlServicos = 'http://localhost:3000/servicos';

  constructor(private http: HttpClient) { }

  getAllClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrlClientes);
  }

  getAllFuncionarios(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.apiUrlFuncionarios);
  }

  getAllServicos(): Observable<Service[]>{
    return this.http.get<Service[]>(this.apiUrlServicos);
  }

  getItemCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiUrlClientes}/${id}`);
  }

  removeCliente(id: number){
    return this.http.delete<Cliente>(`${this.apiUrlClientes}/${id}`);
  }

}
