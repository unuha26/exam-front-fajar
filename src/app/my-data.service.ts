import { Http } from "@angular/http";
import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {
  UserList : object[] = [];
  newUser = {
    'id': Number,
    'name' : '',
    'email' : '',
    'address' : '',
    'phoneNumber' : Number
  };

  constructor(private http:Http){
    this.http.get('http://jsonplaceholder.typicode.com/users')
    .subscribe(
      result => {

        result.json().forEach(user => {

          this.UserList.push({
            "id" : user.id,
            "name" : user.name,
            "email" : user.email,
            "address" : user.address.street + ', ' + user.address.suite + ', '  + user.address.city + ', '  + user.address.zipcode,
            "phoneNumber" : user.phone
          });

        });
      },
      error => { 
        console.log(error);
      }
    );
  }

  AddUser () : void {
    this.newUser['id'] = this.UserList[this.UserList.length -1]['id'] +1;
    this.UserList.push(this.newUser);
  }

  DeleteUser(id) : void {
    for (var i = 0; i < this.UserList.length; i++) {
      if (this.UserList[i]["id"] == id) {
        this.UserList[i]["deleted"] = true;
        break;
      }
    }
    this.UserList.splice(i, 1);
  }
}
