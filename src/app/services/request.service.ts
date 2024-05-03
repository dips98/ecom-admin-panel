import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConfigService } from './url-config.service';

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  constructor(
    private http: HttpClient,
    private configUrl: UrlConfigService,
  ) { }

  registerUser(body: any) {
    var url = `${this.configUrl.urlhost}/register`
    const Res = this.http.post(url, body);
    return Res;
  }

  loginUser(body: any) {
    var url = `${this.configUrl.urlhost}/login`
    const Res = this.http.post(url, body);
    return Res;
  }

  addProduct(body: any) {
    var url = `${this.configUrl.urlhost}/addProduct`
    const Res = this.http.post(url, body);
    return Res;
  }

}
