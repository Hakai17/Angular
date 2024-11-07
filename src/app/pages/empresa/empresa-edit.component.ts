import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../../services/empresa/empresa.service';
import { Empresa } from '../../models/empresa.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-empresa-editar',
  templateUrl: './empresa-edit.component.html',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  styleUrls: ['./empresa-edit.component.css']
})
export class EmpresaEditComponent implements OnInit {
  empresa: Empresa | null = null;
  empresaId: number | null = null;

  constructor(
    private empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.empresaId = +params['id'];
      this.carregarEmpresa();
    });
  }

  carregarEmpresa(): void {
    if (this.empresaId) {
      this.empresaService.getEmpresaById(this.empresaId).subscribe(
        (data) => {
          this.empresa = data;
        },
        (error) => {
          console.error('Erro ao carregar a empresa', error);
        }
      );
    }
  }

  salvarEmpresa(): void {
    if (this.empresa) {
      this.empresaService.updateEmpresa(this.empresa).subscribe(
        (response) => {
          console.log('Empresa atualizada com sucesso', response);
          this.router.navigate(['/empresa']);  // Redireciona para a lista de empresas
        },
        (error) => {
          console.error('Erro ao atualizar a empresa', error);
        }
      );
    }
  }

  deletarEmpresa(): void {
    if (this.empresaId) {
      this.empresaService.deleteEmpresa(this.empresaId).subscribe(
        (response) => {
          console.log('Empresa deletada com sucesso', response);
          this.router.navigate(['/empresa']);  // Redireciona para a lista de empresas
        },
        (error) => {
          console.error('Erro ao deletar a empresa', error);
        }
      );
    }
  }
}
