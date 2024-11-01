import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PsicologosInterface } from '../Models/psicologos-interface';
@Injectable({
  providedIn: 'root'
})
export class PsicologosService {

  constructor(readonly httpClient:HttpClient) { }

  createPsicologo(psycho: PsicologosInterface): Observable<PsicologosInterface> {
    let url = 'http://localhost:3000/api/v1/psicologa/';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<PsicologosInterface>(url, psycho);
  }

  getPsicologos(){
    let url = 'http://localhost:3000/api/v1/psicologa/all';
    return this.httpClient.get<PsicologosInterface[]>(url);
  }
}
