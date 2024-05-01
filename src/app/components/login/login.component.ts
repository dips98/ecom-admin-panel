import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ModelService } from '../../services/model.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!:FormGroup 

  constructor(
  private router:Router,
  private modelService:ModelService,
  ){  
  }

  ngOnInit():void{
    this.setForm();
  }

  setForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.maxLength(5)])
    })
  }

  login(){
    if(this.loginForm.valid){
      alert('Login Successfull!');
      const body = this.loginForm.value;
      this.modelService.loginUser(body).subscribe({next:(resp:any)=>{
        if(resp && resp.msg=='loginSuccess'){
          this.router.navigate(['dashboard']).then(()=>{
            alert("Login Successfull");
          })
        }
      },error:(err)=>{
        console.log(err);
      }})
    }
  }

}
