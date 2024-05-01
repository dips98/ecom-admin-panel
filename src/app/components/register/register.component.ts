import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ModelService } from '../../services/model.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private modelService:ModelService
  ){}

  userRegForm!: FormGroup;

  ngOnInit():void{
    this.setForm();
  }

  setForm(){
    this.userRegForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      contact: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }

  async doRegister(){
    const body = this.userRegForm.value;
    (await this.modelService.resgisterUser(body)).subscribe((data:any)=>{
      console.log(data);
      this.userRegForm.reset();
      alert(data.msg);
    })
  }
}
