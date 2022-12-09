import { Component, OnInit } from '@angular/core';
import { ServicosGeraisService } from 'src/app/services/servicosGerais.service';
import { Funcionario } from 'src/app/models/Funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})

export class FuncionariosComponent implements OnInit {
  funcionarios: Funcionario[] = []
  
    constructor(private servicosGeraisService: ServicosGeraisService){
      this.getFuncionarios();
    }


  ngOnInit(): void {
  }

  getFuncionarios(): void {
    this.servicosGeraisService.getAllFuncionarios().subscribe((funcionarios) => (this.funcionarios) = funcionarios)
  }

  removeFuncionarios(funcionario: Funcionario){
    this.funcionarios = this.funcionarios.filter((f) => funcionario.id !== f.id)
    this.servicosGeraisService.removeCliente(funcionario.id).subscribe()
  }
  
}
