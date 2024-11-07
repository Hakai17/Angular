import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, RouterModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post<any>('https://127.0.0.1:8000/sso/login', this.user)
      .subscribe(response => {
        console.log(response);
        localStorage.setItem('accessToken', response['accessToken']);
        this.router.navigate(['/']);
      }, error => {
        console.error('Erro no login:', error);
      });
  }
}
