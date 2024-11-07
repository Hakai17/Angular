import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importando FormsModule

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, RouterModule]  // Incluindo FormsModule para usar ngModel e ngForm
})
export class RegisterComponent {
  user = { email: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('https://127.0.0.1:8000/sso/register', this.user)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/login']);
      }, error => {
        console.error('Erro ao registrar:', error);
      });
  }
}
