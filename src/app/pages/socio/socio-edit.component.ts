import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocioService } from '../../services/socio/socio.service';
import { Socio } from '../../models/socio.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-socio-editar',
  templateUrl: './socio-edit.component.html',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  styleUrl: './socio-edit.component.css'
})
export class socioEditComponent implements OnInit {
  socio: Socio | null = null;
  socioId: number | null = null;

  constructor(
    private socioService: SocioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.socioId = +params['id'];
      this.carregarSocio();
    });
  }

  carregarSocio(): void {
    if (this.socioId) {
      this.socioService.getSocioById(this.socioId).subscribe(
        (data) => {
          this.socio = data;
        },
        (error) => {
          console.error('Erro ao carregar a socio', error);
        }
      );
    }
  }

  salvarSocio(): void {
    if (this.socio) {
      this.socioService.updateSocio(this.socio).subscribe(
        (response) => {
          console.log('socio atualizada com sucesso', response);
          this.router.navigate(['/socio']);  // Redireciona para a lista de socios
        },
        (error) => {
          console.error('Erro ao atualizar a socio', error);
        }
      );
    }
  }

  deletarSocio(): void {
    if (this.socioId) {
      this.socioService.deleteSocio(this.socioId).subscribe(
        (response) => {
          console.log('socio deletada com sucesso', response);
          this.router.navigate(['/socio']);  // Redireciona para a lista de socios
        },
        (error) => {
          console.error('Erro ao deletar a socio', error);
        }
      );
    }
  }
}
