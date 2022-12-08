import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  ELEMENT_DATA: Funcionario[] = [
    {
      "id": "0",
      "nome": "Priscila Milena Luciana Aragão",
      "cpf": "627.816.947-97",
      "servico": "Banho e Tosa",
      "email": "priscila_aragao@atualvendas.com",
      "senha": "l8wCcD6Jww",
      "celular": "(13) 98766-5308"
    },
    {
      "id": "1",
      "nome": "Elisa Sandra Santos",
      "cpf": "467.367.052-31",
      "servico": "Veterinário",
      "email": "elisa_sandra_santos@iega.com.br",
      "senha": "KTCC6n4kBj",
      "celular": "(13) 98755-7388"
    },
    {
      "id": "2",
      "nome": "Otávio Sara Moraes",
      "cpf": "514.643.740-82",
      "servico": "Banho e Tosa",
      "email": "otavio.elza.moraes@rgsa.com.br",
      "senha": "04jIthIkaH",
      "celular": "(21) 99408-3437"
    },
    {
      "id": "3",
      "nome": "Giovanne Ramon Souza",
      "cpf": "054.177.833-15",
      "servico": "Veterinário-oftamologista",
      "email": "giovannersouza@sectron.com.br",
      "senha": "J7I49Teffj",
      "celular": "(21) 98304-9147"
    },
    {
      "id": "4",
      "nome": "Isabela Gabrielly Viana",
      "cpf": "622.664.096-03",
      "servico": "Atendente",
      "email": "isabela_gabrielly_viana@jarretta.com",
      "senha": "GldCjZnyh7",
      "celular": "(92) 99249-6628"
    },
    {
      "id": "5",
      "nome": "Sônia Regina Olivia Lopes",
      "cpf": "078.493.020-10",
      "servico": "Veterinária",
      "email": "sonia-lopes71@obrativaengenharia.com.br",
      "senha": "kqoBck5nOU",
      "celular": "(51) 98901-9372"
    },
     {
      "id": "6",
      "nome": "Louise Alícia da Paz",
      "cpf": "732.357.582-67",
      "servico": "Atendente",
      "email": "louise_alicia_dapaz@nipbr.com.br",
      "senha": "HxIc0DuZ21",
      "celular": "(98) 98533-3137"
    },
    {
      "id": "7",
      "nome": "Lúcia Elza Rebeca da Mota",
      "cpf": "387.587.903-14",
      "servico": "Banho e Tosa",
      "email": "luciaelzadamota@plenamenterh.com.br",
      "senha": "mNTHKowI12",
      "celular": "(63) 98505-2599"
    },
    {
      "id": "8",
      "nome": "Sabrina Gabriela Fabiana da Mata",
      "cpf": "827.352.049-87",
      "servico": "Veterinária",
      "email": "sabrina-damata79@heineken.com.br",
      "senha": "nNEErZPImW",
      "celular": "(41) 99248-0036"
    },
    {
      "id": "9",
      "nome": "Agatha Eloá Galvão",
      "cpf": "525.627.400-76",
      "servico": "Atendente",
      "email": "agatha.eloa.galvao@bmalaw.com.br",
      "senha": "ndtwWy4UMM",
      "celular": "(63) 98697-7341"
    }
  ]
  
    displayedColumns: string[] = ['position', 'name', 'cpf', 'service', 'email'];
    dataSource = new MatTableDataSource<Funcionario>(this.ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
