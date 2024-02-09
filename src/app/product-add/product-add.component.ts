import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { ProductModel } from '../get-products/get-products.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule,MatIconModule, MatDialogContent, MatDialogTitle, HttpClientModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss'
})
export class ProductAddComponent {

  product = {
    title: '',
    price: '',
    description: '',
    image: '',
    category: ''
  };

  constructor(private http: HttpClient,@Inject(MAT_DIALOG_DATA) public dialogData:ProductModel,public dialogRef:MatDialogRef<ProductAddComponent>) { }

  addUrl = "https://fakestoreapi.com/products";
  close(): void {
    this.dialogRef.close();
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    // API'ye POST isteği gönder
    this.http.post(this.addUrl, this.product)
      .subscribe((response) => {
        console.log('Product added successfully:', response);
        this.dialogRef.close(this.product);
      }, (error) => {
        console.error('Error adding product:', error);
        // Hata durumunda kullanıcıya bilgi verebilirsiniz.
      });
  }

  
  
}

