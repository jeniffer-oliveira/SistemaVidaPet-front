import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from 'src/app/models/Servico';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  ELEMENT_DATA: Service[] = [
    {
      "id": "0",
      "nomeServico": "Banho e Tosa",
      "valor": "Entre 100.00 a 200.00"
    },
    {
      "id": "1",
      "nomeServico": "Exames",
      "valor": "A partir de 50 reais"
    },
    {
      "id": "2",
      "nomeServico": "Vacina",
      "valor": "A partir de 150.00"
    },
    {
      "id": "3",
      "nomeServico": "Consultas",
      "valor": "A partir de 150.00"
    }   
  ]

  displayedColumns: string[] = ['id', 'nomeServico', 'valor'];
  dataSource = new MatTableDataSource<Service>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
