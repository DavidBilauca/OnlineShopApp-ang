import { Injectable } from "@angular/core";
import { IListItem, IProduct, IUser } from "../../types";

@Injectable({
  providedIn: 'root',
})
export class UserAPI{

async getDefaultUser() {
    var data = {};
    //  const result = await fetch('https://localhost:7060/api/Shopping', {
    const result = await fetch('http://localhost:8080/Shopping/defaultUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        data = response.json();
      })
      .catch((error) => {
        console.log(error);
      });

    return data as IUser;
  }

  async getShoppingCartItems(userId:string){
    var data ={};
    await fetch('http://localhost:8080/Shopping/cartItems/'+userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        data = response.json();
      })
      .catch((error) => {
        console.log(error);
      });
      //console.log("userApi getFavorites: "+ (data as IProduct[]));
    return data as IListItem[];
  }

  async getFavorites(userId:string){
    var data ={};
    await fetch('http://localhost:8080/Shopping/favorites/'+userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        data = response.json();
      })
      .catch((error) => {
        console.log(error);
      });
      //console.log("userApi getFavorites: "+ (data as IProduct[]));
    return data as IProduct[];
  }

}
