import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

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
}
