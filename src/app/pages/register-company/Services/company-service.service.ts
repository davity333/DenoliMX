import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyRegister } from '../Models/company-register';
@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  
  constructor(readonly httpClient:HttpClient) { }

  createCompany(company: CompanyRegister): Observable<any> {
    let url = 'http://localhost:3000/api/v1/empresas';
    console.log(company);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>(url, company);
  }

  getCompanys(): Observable<any>{
    let url = 'http://localhost:3000/api/v1/empresas/all';
    return this.httpClient.get<CompanyRegister[]>(url);
  }
}
