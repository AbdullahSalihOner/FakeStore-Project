import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 
import {MAT_DIALOG_DATA, MatDialog, MatDialogContent,MatDialogTitle,MatDialogRef} from '@angular/material/dialog';
import { ProductModel } from '../get-products/get-products.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatIconModule, MatDialogContent, MatDialogTitle],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:ProductModel,public dialogRef:MatDialogRef<ProductDetailComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
  
}
