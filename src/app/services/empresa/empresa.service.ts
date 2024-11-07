import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../../models/empresa.model';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {

  private apiUrl = 'https://127.0.0.1:8000/empresa';

  constructor(
    private http: HttpClient,
  ) { }

  private getAuthToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  private createAuthHeaders(): HttpHeaders {
    const token = this.getAuthToken();
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  getEmpresas(): Observable<Empresa[]> {
    const headers = this.createAuthHeaders();
    return this.http.get<Empresa[]>(`${this.apiUrl}/`, { headers });
  }

  getEmpresaById(id: number): Observable<Empresa> {
    const headers = this.createAuthHeaders();
    return this.http.get<Empresa>(`${this.apiUrl}/${id}`, { headers });
  }

  updateEmpresa(empresa: Empresa): Observable<Empresa> {
    const headers = this.createAuthHeaders();
    return this.http.put<Empresa>(`${this.apiUrl}/${empresa.id}`, empresa, { headers });
  }

  deleteEmpresa(id: number): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }

  createEmpresa(empresa: Empresa): Observable<Empresa> {
    const headers = this.createAuthHeaders();
    return this.http.post<Empresa>(`${this.apiUrl}/new`, empresa, { headers });
  }
}
