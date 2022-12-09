import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  //para Cliente
  removeCliente(id: number){
    return this.http.delete<Cliente>(`${this.apiUrlClientes}/${id}`);
  }

  getAllClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrlClientes);
  }

  getItemCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiUrlClientes}/${id}`);
  }

  //para Funcionario

  removeFuncionario(id: number){
    return this.http.delete<Funcionario>(`${this.apiUrlFuncionarios}/${id}`)
  }

  getAllFuncionarios(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.apiUrlFuncionarios);
  }

  getItemFuncionario(id: number): Observable<Funcionario>{
    return this.http.get<Funcionario>(`${this.apiUrlFuncionarios}/${id}`)
  }

  //para Servico
  removeServico(id: number){
    return this.http.delete<Service>(`${this.apiUrlServicos}/${id}`)
  }

  getAllServicos(): Observable<Service[]>{
    return this.http.get<Service[]>(this.apiUrlServicos);
  }

  getItemServico(id: number): Observable<Service>{
    return this.http.get<Service>(`${this.apiUrlServicos}/${id}`)
  }



}
