import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ModelService } from '../../services/model.service';
import {  NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private modelService: ModelService
  ) { }

  userRegForm!: FormGroup;

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.userRegForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  async doRegister() {
    if (this.userRegForm.valid) {
      const body = this.userRegForm.value;
      (await this.modelService.resgisterUser(body)).subscribe((data: any) => {
        console.log(data);
        this.userRegForm.reset();
        alert(data.msg);
      })
    } else {
      alert("Please fill valid form");
    }
  }
}
