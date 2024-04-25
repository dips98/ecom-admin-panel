import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  productForm! :FormGroup;
  productList:any = [];

  constructor(
     
  ){

  }

  ngOnInit():void{
    this.setForm();
  }

  setForm(){
    this.productForm = new FormGroup({
      productId: new FormControl(''),
      productName: new FormControl(''),
      productRate: new FormControl(''),
      productQuantity: new FormControl('')
    })
  }

  submit(){
    this.productList.push(this.productForm.value);
    console.log(this.productList);
    this.productForm.reset();
    this.closeModel()
  }

  // modal open method

  openModel(){
    const modalElement:any = document.getElementById('addProduct')
    const modal = new bootstrap.Modal(modalElement);

    modal.show();
  }

  closeModel(){
    const modalElement = document.getElementById('addProduct');
    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];

    if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
            // Remove the modal backdrop
            if(modalBackdrop)
              modalBackdrop.parentNode && modalBackdrop.parentNode.removeChild(modalBackdrop);
        }
    }
  }

}
