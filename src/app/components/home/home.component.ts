import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientes: Cliente[] = [];
  
  displayedColumns: string[] = ['id', 'nomeCliente', 'cpf', 'nomePet', 'especiePet', 'servico', 'data', 'valor'];
  dataSource = new MatTableDataSource<Cliente>(this.clientes);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private clienteService: ClienteService) {
    this.getClientes();
   }

  ngOnInit(): void {
  }

  getClientes(): void{
    this.clienteService.getAll().subscribe((clientes) => (this.clientes = clientes))
  }

}
