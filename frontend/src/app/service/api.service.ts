import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  public getUser(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  };

  public addUser(name: string, username: string, password: string): Observable<any> {
    const newUser = { name, username, password };
    console.log(newUser)
    return this.http.post(this.urlApi, newUser);
  }

  public editUser(_id: string, name?: string, username?: string, password?: string): Observable<any> {
    const editedUser = { name, username, password };
    const url = `${this.urlApi}/${_id}`;
    return this.http.patch(url, editedUser);
  }

  public deleteUser(_id: string): Observable<any> {
    const url = `${this.urlApi}/${_id}`;
    return this.http.delete(url);
  }
}
