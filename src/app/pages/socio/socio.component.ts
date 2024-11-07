import { Component, OnInit } from '@angular/core';
import { SocioService } from '../../services/socio/socio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  styleUrl: './socio.component.css'
})
export class SocioComponent implements OnInit {
  socios: any[] = [];

  constructor(private socioService: SocioService) { }

  ngOnInit(): void {
    this.socioService.getSocio().subscribe(
      (data) => {
        this.socios = data;
      },
      (error) => {
        console.error('Erro ao buscar empresas', error);
      }
    );
  }
}
