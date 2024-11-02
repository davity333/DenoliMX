import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DenunciaInterface } from '../models/denuncia-interface';
@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  constructor(readonly httpClient:HttpClient) { }

  createComplaint(denuncia: DenunciaInterface): Observable<any> {
    let url = 'http://localhost:3000/api/v1/denuncias/';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<DenunciaInterface>(url, denuncia);
  }

}
