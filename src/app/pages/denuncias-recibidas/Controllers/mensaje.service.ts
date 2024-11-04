import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeInterface } from '../Models/mensaje-interface';
@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(readonly httpClient:HttpClient) { }

  createMessage(mensajeInterface:MensajeInterface): Observable<any> {
    let url = 'http://localhost:3000/api/v1/mensaje/';
    const mensaje = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<MensajeInterface>(url, mensajeInterface);
  }

  getMessage(codigo:number){
    let url = `http://localhost:3000/api/v1/mensaje/${codigo}`;
    return this.httpClient.get<MensajeInterface[]>(url);
  }

  updateMessage(codigo: number, data: any): Observable<any> {
    console.log(data, "soy la dataa");
    
    let url = `http://localhost:3000/api/v1/mensaje/${codigo}`;
    return this.httpClient.put<any>(url, data); 
  }
}
