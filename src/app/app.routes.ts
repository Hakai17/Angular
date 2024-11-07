import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { SocioComponent } from './pages/socio/socio.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { EmpresaEditComponent } from './pages/empresa/empresa-edit.component';
import { EmpresaCreateComponent } from './pages/empresa/empresa-create.component';
import { SocioCreateComponent } from './pages/socio/socio-create.component';
import { socioEditComponent } from './pages/socio/socio-edit.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'empresa/edit/:id', component: EmpresaEditComponent },
  { path: 'empresa/new', component: EmpresaCreateComponent},
  { path: 'socio', component: SocioComponent },
  { path: 'socio/edit/:id', component: socioEditComponent },
  { path: 'socio/new', component: SocioCreateComponent },
  { path: '', component: NavbarComponent, pathMatch: 'full' }
];
