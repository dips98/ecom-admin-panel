import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  constructor(
    private http: HttpClient
  ) { }

  registerUser(body: any) {
    var url = 'http://localhost:3000/register'
    const Res = this.http.post(url, body);
    return Res;
  }

  loginUser(body: any) {
    var url = 'http://localhost:3000/login'
    const Res = this.http.post(url, body);
    return Res;
  }

}
