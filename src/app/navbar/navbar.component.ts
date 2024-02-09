import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { GetProductsComponent } from '../get-products/get-products.component';
import { ProductFilterByCategoryComponent } from '../product-filter-by-category/product-filter-by-category.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [ProductFilterByCategoryComponent]
})
export class NavbarComponent {

  categories: String[] | any= [];

  categoryUrl = 'https://fakestoreapi.com/products/categories';

  constructor(private http: HttpClient,private productFilterByCategory: ProductFilterByCategoryComponent){
    this.getCategories();
  }

  getCategories(){
    this.http.get(this.categoryUrl).subscribe(response=>{
    this.categories = response;
  console.log(this.categories);
  })
}

getProductsByCategory(category: string): void {
  this.productFilterByCategory.getProductsByCategory(category)
    .subscribe(data => {
      console.log(data);
      // Burada veriyi kullanabilirsiniz
    }, error => {
      console.error('Error:', error);
    });
}




getCategory(category: string): string{
  if(category === "electronics"){
    return "Elektronik";
  }
  else if(category === "jewelery"){
    return "Mücevherler";
  }
  else if(category === "men's clothing"){
    return "Erkek Giyim";
  }else if(category == "women's clothing"){
    return "Kadın Giyim";
  }else{  
    return "";
  }
}

}
