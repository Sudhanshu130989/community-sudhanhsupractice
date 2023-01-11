import { Component } from '@angular/core';
import { user } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user :user={
    "id":1000,
    "name":"Sudhanshu Ranjan",
     "email":"Sudhanshu@gmail.com",
     "mobileno":8893118598
  }

}
