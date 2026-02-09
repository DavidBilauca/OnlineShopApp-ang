import { Injectable } from '@angular/core';
import { MockProducts } from '../mockdata';
import { IListItem, IProduct } from '../../types';
import { HttpStatusCode } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductAPI {
  mock_getAllProducts() {
    return MockProducts;
  }

  async getAllProducts() {
    var data = {};
    //  const result = await fetch('https://localhost:7060/api/Shopping', {
    const result = await fetch('http://localhost:8080/Shopping', {
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

    return data as IProduct[];
  }

  async getProductById(productId:string){
    var data={};
    const result = fetch('http://localhost:8080/Shopping/'+productId, {
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      },
    })
    .then((response)=>{
      data = response.json();
    })
    .catch((error) => {
        console.log(error);
      });

      return data as IProduct;
  }

  async toggleCartItem(cartItemId:string,userId:string){
    var cartItemState;
    
    //  const result = await fetch('https://localhost:7060/api/Shopping', {
    const result = await fetch('http://localhost:8080/Shopping/toggleCartItem/'+cartItemId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:userId
    })
      .then((response) => {
        cartItemState = response.json();
      })
      .catch((error) => {
        // console.log(error);
        cartItemState = false;
      });
      return cartItemState as unknown as boolean;
  }

  async updateQuantity(cartItemId:string,quantity:number){
    var cartItem;
    var data = {quantity:quantity}
    //  const result = await fetch('https://localhost:7060/api/Shopping', {
    const result = await fetch('http://localhost:8080/Shopping/updateQuantity/'+cartItemId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    })
      .then((response) => {
        cartItem = response.json();
      })
      .catch((error) => {
        // console.log(error);
        cartItem = null;
      });
      return cartItem as unknown as IListItem;
  }

  async setFavorite(productId:string,userId:string){
    var favoriteState;
    //  const result = await fetch('https://localhost:7060/api/Shopping', {
    const result = await fetch('http://localhost:8080/Shopping/toggleFavorite/'+productId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body:userId
    })
      .then((response) => {
        favoriteState = response.json();
      })
      .catch((error) => {
        // console.log(error);
        favoriteState = false;
      });
      return favoriteState as unknown as boolean;
  }
  
}
