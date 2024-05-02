import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ModelService } from '../../services/model.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!:FormGroup;
  errorMsg!:string;

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
    this.errorMsg = '';
    if(this.loginForm.valid){
      const body = this.loginForm.value;
      this.modelService.loginUser(body).subscribe({next:(resp:any)=>{
        if(resp && resp.msg=='loginSuccess'){
          this.loginSuccessPopupNavigate();
        }else{
          this.errorMsg = resp.msg;
          this.errorPopup(this.errorMsg);
        }
      },error:(err)=>{
        console.log(err);
        this.errorMsg = err?.error?.msg || 'Login failed!';
        this.errorPopup(this.errorMsg);
      }})
    }
  }

  errorPopup(Msg:string){
    Swal.fire({
      title: "Login Failed!",
      text: Msg,
      icon: "error"
    });
  }

  loginSuccessPopupNavigate() {
    let timerInterval:any;
    Swal.fire({
      position:'top-end',
      title: "Login Successful!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer:any = Swal.getPopup()?.querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        this.router.navigate(['dashboard']).then(()=>{});
      }
    });
  }

}
