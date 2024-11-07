import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/empresa/empresa.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  empresas: any[] = [];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.getEmpresas().subscribe(
      (data) => {
        this.empresas = data;
      },
      (error) => {
        console.error('Erro ao buscar empresas', error);
      }
    );
  }
}
