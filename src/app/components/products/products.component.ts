import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { ModelService } from '../../services/model.service';

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
  index:number = 0 ;

  constructor(
    private modelService:ModelService,
  ){}

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
    this.modelService.addProduct(this.productForm.value).subscribe((result:any)=>{
      console.log(result);
    })
    console.log(this.productList);
    this.productForm.reset();
    this.closeModel('addProduct');
  }


  // modal open method

  openModel(modalId:string, index:number = -1){
    this.index = index;
    if(modalId=='editProduct'){
      this.productForm = new FormGroup({
        productId: new FormControl(this.productList[index].productId),
        productName: new FormControl(this.productList[index].productName),
        productRate: new FormControl(this.productList[index].productRate),
        productQuantity: new FormControl(this.productList[index].productQuantity)
      })
    }

    const modalElement:any = document.getElementById(modalId)
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  updateProduct(){
    console.log('D'); 
  }
  

  editSaveData(){
    console.log(this.productForm.value);
    this.productList[this.index].productId = this.productForm.value.productId;
    this.productList[this.index].productName = this.productForm.value.productName;
    this.productList[this.index].productRate = this.productForm.value.productRate;
    this.productList[this.index].productQuantity = this.productForm.value.productQuantity;

    this.closeModel('editProduct');
  }

  deleteProduct() {
    console.log('This product is deleted !', this.productList.splice(this.index,1));
    this.closeModel('deleteProduct');
  }

  closeModel(modalId:string){
    const modalElement = document.getElementById(modalId);
    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];

    if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
            if(modalBackdrop)
              modalBackdrop.parentNode && modalBackdrop.parentNode.removeChild(modalBackdrop);
        }
    }
  }

}
