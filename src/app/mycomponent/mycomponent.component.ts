import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent {
  componentProducts :any
  constructor(service:ProductService){
    this.componentProducts=service.getproductDetails();
  }
}
