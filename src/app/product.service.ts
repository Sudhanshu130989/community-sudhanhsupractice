import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product :any;
  constructor() { }

  getproductDetails()
  {
    return this.product=[ {
      "id":101,
      "name":"Watch",
      "brand":"Titan",
      "price":7000

  },
  {
    "id":500,
    "name":"Tshirt",
    "brand":"Levis",
    "price":3000

},
{
  "id":900,
  "name":"Bicycle",
  "brand":"Hero",
  "price":2000

},
{
"id":1300,
"name":"Laptop",
"brand":"Dell",
"price":17000

},
{
"id":3000,
"name":"TV",
"brand":"LG",
"price":40000

},
{
"id":1234,
"name":"Mobile",
"brand":"Oppo",
"price":11000

}
];
  
  }
}
