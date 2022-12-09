import { Component, OnInit } from '@angular/core';
import { ServicosGeraisService } from 'src/app/services/servicosGerais.service';
import { Service } from 'src/app/models/Servico';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  servicos: Service[] = [];

  constructor(private servicosGeraisService: ServicosGeraisService) {
    this.getServicos()
   }

  ngOnInit(): void {
  }

  getServicos(): void {
    this.servicosGeraisService.getAllServicos().subscribe((servicos) => (this.servicos = servicos))
  }

  removeServicos(servico: Service){
    this.servicos = this.servicos.filter((s) => servico.nomeServico !== s.nomeServico);
    this.servicosGeraisService.removeServico(servico.id).subscribe
  }

}
