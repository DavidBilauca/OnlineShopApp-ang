import { Injectable } from '@angular/core';
import { Categories, MockProducts } from '../mockdata';
import { ICategory, IProduct } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class CategoryAPI {
  mock_getAllCategories() {
    return Categories;
  }

  async getAllCategories() {
    var data = {};
    //  const result = await fetch('https://localhost:7060/api/Shopping', {
    const result = await fetch('http://localhost:8080/Shopping/Categories', {
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

    return data as ICategory[];
  }
}
