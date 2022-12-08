import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Cliente } from 'src/app/models/Cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ELEMENT_DATA: Cliente[] = [
    {
      id: 0, 
      nomeCliente: "Caroline Maria Fernandes Peixoto",
      cpf: "484.982.345-90",
      nomePet: "Rhaenyra",
      especiePet: "Gato",
      servico: "Vacina V5",
      data: "15/12/2022",
      valor: 150.00
    },
    {
      id: 1, 
      nomeCliente: "Maria Helena Ramos",
      cpf: "523.955.444-77",
      nomePet: "Lis",
      especiePet: "Cachorro",
      servico: "Banho e Tosa",
      data: "15/12/2022",
      valor: 150.00
  },
  {
    id: 2, 
    nomeCliente: "Fernanda Alves Santos",
    cpf: "709.991.783-85", 
    nomePet: "Lola",
    especiePet: "Coelho",
    servico: "Castração",
    data: "16/12/2022",
    valor: 300.00
  },
  {
    id: 3, 
    nomeCliente: "Matheus Henrique Cruz",
    cpf: "719.624.423-06",
    nomePet: "Bartolomeu",
    especiePet: "Cachorro",
    servico: "Banho e Tosa",
    data: "20/12/2022",
    valor: 100.00
  },
  {
    id: 4, 
    nomeCliente: "Manoel João da Cruz",
    cpf: "742.150.513-04", 
    nomePet: "Piclés",
    especiePet: "Cachorro",
    servico: "Vacina antirrábica",
    data: "23/12/2022",
    valor: 200.00
  },
  {
    id: 5, 
    nomeCliente: "Bianca de Oliveira Andrade",
    cpf: "712.521.163-14", 
    nomePet: "Amora",
    especiePet: "Hamster",
    servico: "Ultrassom",
    data: "24/12/2022",
    valor: 350.00
  },
  {
    id: 6, 
    nomeCliente: "Guilherme Henrique Campos",
    cpf: "499.861.367-76", 
    nomePet: "Arthur",
    especiePet: "Cachorro",
    servico: "Banho e Tosa",
    data: "26/12/2022",
    valor: 150.00
  },
  {
    id: 7, 
    nomeCliente: "Ronaldo Campos Santos",
    cpf: "001.655.000-50",
    nomePet: "Pit",
    especiePet: "Cachorro",
    servico: "Vacina antirrábica",
    data: "28/12/2022",
    valor: 200.00
  },
  {
    id: 8, 
    nomeCliente: "Maria Olívia Santana",
    cpf: "076.718.706-76",
    nomePet: "Liza",
    especiePet: "Gato",
    servico: "Vacina V5",
    data: "23/12/2022",
    valor: 250.00
  },
  {
    id: 9, 
    nomeCliente: "Beatriz de Almeida Cruz",
    cpf: "910.844.720-90",
    nomePet: "Serena",
    especiePet: "Gato",
    servico: "Vacina V5",
    data: "15/01/2023",
    valor: 250.00
  },
  {
    id: 10, 
    nomeCliente: "Juan Diego Baptista",
    cpf: "255.900.329-540",
    nomePet: "Olivia",
    especiePet: "Cachorro",
    servico: "Oftamologista",
    data: "15/01/2023",
    valor: 350.00
  },
  {
    id: 9, 
    nomeCliente: "Enzo Leonardo Almeida",
    cpf: "112.034.640-10",
    nomePet: "Sirius Black",
    especiePet: "Gato",
    servico: "Vacina antirrábica",
    data: "15/01/2023",
    valor: 200.00
  }
];
  
  displayedColumns: string[] = ['id', 'nomeCliente', 'cpf', 'nomePet', 'especiePet', 'servico', 'data', 'valor'];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
