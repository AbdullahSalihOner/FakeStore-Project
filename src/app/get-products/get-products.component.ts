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

  productUrl = 'https://fakestoreapi.com/products/';

  
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

 //Silme işlemi için kullanılacak fonksiyon
  deleteProduct(product:ProductModel, id:number){

    // Silme işlemi başarılıysa, ürünü listeden kaldırıyoruz
   this.products = this.products.filter((product:ProductModel) => product.id !== id);
    // Silme işlemi içinAPI'ye DELETE isteği gönderiyoruz
    this.http.delete(this.productUrl+`${id}`)
    .subscribe((response) => {
      console.log('Product deleted successfully:', response);
      // Silme işlemi başarılıysa istediğiniz işlemler
    }, (error) => {
      console.error('Error deleting product:', error);
      // Silme işlemi sırasında bir hata oluştuysa burada gerekli işlemler
    });
  }

   // Kategoriye göre ürünleri filtreleme metodu
   productFilterByCategory(category: string): void {
    if (category) {
      this.http.get(`${this.productUrl}/category/${category}`).subscribe(response => {
        this.products = response;
      });
    } else {
      // Eğer kategori boşsa, tüm ürünleri getir
      this.getProducts();
    }
  }



  //Ekleme butonuna tıklandığında çalışacak fonksiyon
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