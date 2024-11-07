import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Socio } from '../../models/socio.model';
import { SocioCreatePayload } from '../../models/socio.model';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  private apiUrl = 'https://127.0.0.1:8000/socio';

  constructor(private http: HttpClient) { }

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

  getSocio(): Observable<any[]> {
    const headers = this.createAuthHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/`, { headers });
  }

  getSocioById(id: number): Observable<Socio> {
    const headers = this.createAuthHeaders();
    return this.http.get<Socio>(`${this.apiUrl}/${id}`, { headers });
  }

  updateSocio(socio: Socio): Observable<Socio> {
    const headers = this.createAuthHeaders();
    return this.http.put<Socio>(`${this.apiUrl}/${socio.id}/edit`, socio, { headers });
  }

  deleteSocio(id: number): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }

  createSocio(payload: SocioCreatePayload): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.post<any>(`${this.apiUrl}/new`, payload, { headers });
  }
}
