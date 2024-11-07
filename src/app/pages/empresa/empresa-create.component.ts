import { NgxMaskDirective } from 'ngx-mask';
import { Component } from '@angular/core';
import { EmpresaService } from '../../services/empresa/empresa.service';
import { Empresa } from '../../models/empresa.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-empresa-create',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.css']
})
export class EmpresaCreateComponent {
  empresa: Empresa = { nome: '', cnpj: '', data_criacao: new Date() };

  constructor(private empresaService: EmpresaService, private router: Router) {}

  createEmpresa(): void {
    this.empresaService.createEmpresa(this.empresa).subscribe(
      (newEmpresa) => {
        console.log('Empresa cadastrada com sucesso:', newEmpresa);
        this.router.navigate(['/empresa']);
      },
      (error) => {

        console.error('Erro ao cadastrar empresa', error);
      }
    );
  }
}
