import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DenunciaInterface } from '../models/denuncia-interface';
import EventEmitter from 'events';
@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
  $theModal = new EventEmitter<any>

  constructor(readonly httpClient:HttpClient) { }

  createComplaint(denuncia: DenunciaInterface): Observable<any> {
    let url = 'http://localhost:3000/api/v1/denuncias/';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<DenunciaInterface>(url, denuncia);
  }

  getComplaint(){
    let url = 'http://localhost:3000/api/v1/denuncias/';
    return this.httpClient.get<DenunciaInterface[]>(url);
  }

  generateCode():number{
    return Math.floor(1000 + Math.random() * 9000);
  }
}
