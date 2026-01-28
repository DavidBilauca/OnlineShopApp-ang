import { Injectable } from '@angular/core';
import { MockProducts } from '../mockdata';
import { IProduct } from '../../types';
import { HttpStatusCode } from '@angular/common/http';

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

  async setFavorite(productId:string){
    var favoriteState:boolean = false;
    //  const result = await fetch('https://localhost:7060/api/Shopping', {
    const result = await fetch('http://localhost:8080/Shopping/toggleFavorite/'+productId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        favoriteState = (response.status == HttpStatusCode.Ok);
      })
      .catch((error) => {
        console.log(error);
      });
      return favoriteState;
  }
}
