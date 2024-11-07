import { Component, OnInit } from '@angular/core';
import { SocioService } from '../../services/socio/socio.service';
import { EmpresaService } from '../../services/empresa/empresa.service';
import { SocioCreatePayload } from '../../models/socio.model';
import { Empresa } from '../../models/empresa.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-socio-create',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './socio-create.component.html',
  styleUrl: './socio-create.component.css'
})
export class SocioCreateComponent implements OnInit {
    socio: { nome: string; cpf: string; empresa: { id: number } } = { nome: '', cpf: '', empresa: { id: 0 } };
  empresas: Empresa[] = [];

  constructor(
    private socioService: SocioService,
    private empresaService: EmpresaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.empresaService.getEmpresas().subscribe(
      (empresas) => {
        this.empresas = empresas;
      },
      (error) => {
        console.error('Erro ao buscar empresas', error);
      }
    );
  }

  createSocio(): void {
    const payload: SocioCreatePayload = {
      nome: this.socio.nome,
      cpf: this.socio.cpf,
      empresa_id: this.socio.empresa.id
    };

    this.socioService.createSocio(payload).subscribe(
      (newSocio) => {
        console.log('Sócio cadastrado com sucesso:', newSocio);
        this.router.navigate(['/socio']);
      },
      (error) => {
        console.error('Erro ao cadastrar sócio', error);
      }
    );
  }
}
