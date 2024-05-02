import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlConfigService {

  urlhost:string = 'http://localhost:3000';
  constructor() { }
}
