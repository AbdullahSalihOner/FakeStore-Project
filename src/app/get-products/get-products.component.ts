import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductAddComponent } from '../product-add/product-add.component';

@Component({
  selector: 'app-get-products',
  standalone: true,
  imports: [HttpClientModule, MatDialogModule],
  templateUrl: './get-products.component.html',
  styleUrl: './get-products.component.scss'
})
export class GetProductsComponent {
  // we declare the products variable here to store the data we get from the server
  products : ProductModel[] | any = [];

  productUrl = 'https://fakestoreapi.com/products';

  // we use the HttpClient module to make a request to the server
  constructor(private http: HttpClient, public dialog:MatDialog) { 
    this.getProducts();
  }
  // we use the get method to get the data from the server
  getProducts() {
    this.http.get(this.productUrl).subscribe(response => {
      this.products = response;
    })
  }

  openDialog(product:ProductModel){
    this.dialog.open(ProductDetailComponent,{
      data: product, // we pass the product data to the dialog,
      disableClose: true, // we disable the close button,
      autoFocus: true, // we set the focus to the dialog
    })
  }

  openProductAddDialog(): void {
    const dialogRef = this.dialog.open(ProductAddComponent, {
      width: '400px',
      data: {} // İlgili başlangıç verilerini buraya ekleyebilirsiniz.
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Product added:', result);
        // Burada API'ye POST isteği yapabilirsiniz.
      } else {
        console.log('Product addition cancelled');
      }
    });
  }

}


// we decalare interface model here because we use this when getting data from the server
export interface ProductModel {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}