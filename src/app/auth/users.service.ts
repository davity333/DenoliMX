import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin, UserRegister } from '../pages/login/Models/user-register';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(readonly httpClient:HttpClient) { }

  createUser(user: UserRegister): Observable<any> {
    let url = 'http://localhost:3000/api/v1/users/';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<UserRegister>(url, user);
  }

  generateId(email: string) {
    const url = 'http://localhost:3000/api/v1/users/' + email;
    return this.httpClient.get<{ status: string; data: { idUser: number } }>(url).pipe(
        tap(response => {
            console.log('API Response:', response); 
            const userId = response.data.idUser;
            localStorage.setItem('id', userId.toString()); 
        })
    );
}



  validateUser(user: UserLogin): Observable<any>{
    let url = 'http://localhost:3000/api/v1/users/validate';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<UserLogin>(url, user);
  }
}
