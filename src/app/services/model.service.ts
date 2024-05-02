import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(
    private request: RequestService
  ) { }

  async resgisterUser(body: any) {
    return this.request.registerUser(body);
  }

  loginUser(body: any) {
    return this.request.loginUser(body);
  }

}
