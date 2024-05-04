import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlConfigService {

  urlhost:string = 'https://admin-g3xt.onrender.com' || 'http://localhost:3000';
  constructor() { }
}
