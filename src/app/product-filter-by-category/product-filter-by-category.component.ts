import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-filter-by-category',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './product-filter-by-category.component.html',
  styleUrl: './product-filter-by-category.component.scss'
})
export class ProductFilterByCategoryComponent {
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProductsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/category/${category}`);
  }
}
