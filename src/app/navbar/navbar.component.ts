import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  categories: String[] | any= [];

  categoryUrl = 'https://fakestoreapi.com/products/categories';

  constructor(private http: HttpClient){
    this.getCategories();
  }

  getCategories(){
    this.http.get(this.categoryUrl).subscribe(response=>{
    this.categories = response;
  console.log(this.categories);
  })
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
