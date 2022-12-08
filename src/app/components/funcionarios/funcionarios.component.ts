import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  funcionarios: Funcionario[] = []
  
    displayedColumns: string[] = ['position', 'nome', 'cpf', 'service', 'email'];
    dataSource = new MatTableDataSource<Funcionario>(this.funcionarios);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private funcionarioService: FuncionarioService) { 
    this.getFuncionarios()
  }

  ngOnInit(): void {
  }

  getFuncionarios(): void{
    this.funcionarioService.getAll().subscribe((funcionarios) => (this.funcionarios = funcionarios))
  }

}
