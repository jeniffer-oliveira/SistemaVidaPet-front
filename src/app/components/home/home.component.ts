import { Component, OnInit} from '@angular/core';;
import { Cliente } from 'src/app/models/Cliente';
import { ServicosGeraisService } from 'src/app/services/servicosGerais.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private servicosGeraisService: ServicosGeraisService ){
    this.getClientes();
  }

  ngOnInit(): void {
  }

  getClientes(): void {
    this.servicosGeraisService.getAllClientes().subscribe((clientes) => (this.clientes = clientes))
  }

  removeClientes(cliente: Cliente){
    this.clientes = this.clientes.filter((c) => cliente.id !== c.id);
    this.servicosGeraisService.removeCliente(cliente.id).subscribe()
  }
}

