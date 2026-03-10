import { Injectable } from '@angular/core';
import { IBillingInfo, IDeliveryInfo, IListItem, IProduct, IUser } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class UserAPI {
  baseUrl:string = "http://localhost:8080";

  async getDefaultUser() {
    var data = {};
    //  const result = await fetch('https://localhost:7060/api/Shopping', {
    const result = await fetch(this.baseUrl+'/Shopping/defaultUser', {
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

  async getShoppingCartItems(userId: string) {
    var data = {};
    await fetch(this.baseUrl+'/Shopping/cartItems/' + userId, {
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

  async getFavorites(userId: string) {
    var data = {};
    await fetch(this.baseUrl+'/Shopping/favorites/' + userId, {
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

  async updateUserInfo(userId:string){
    var data ={};
    await fetch(this.baseUrl+'/Shopping/updateUser/'+userId,{
      method:"PUT",
      headers: {
        'Content-Type':'application/json',
      },
    })
    .then((response)=>{
      data = response.json();
    })
    .catch((error) => {
        console.log(error);
      });
    return data as IUser;
  }

  async updateBillingInfo(userId:string,billInfo:IBillingInfo){
    var data ={};
    await fetch(this.baseUrl+'/Shopping/addBilling/'+userId,{
      method:"POST",
      headers: {
        'Content-Type':'application/json',
      },
      body:JSON.stringify(billInfo)
    })
    .then((response)=>{
      data = response.json();
    })
    .catch((error) => {
        console.log(error);
      });
    return data as IBillingInfo;
  }

  async updateShippingInfo(userId:string,shippInfo:IDeliveryInfo){
    var data ={};
    await fetch(this.baseUrl+'/Shopping/addShipping/'+userId,{
      method:"POST",
      headers: {
        'Content-Type':'application/json',
      },
      body:JSON.stringify(shippInfo)
    })
    .then((response)=>{
      data = response.json();
    })
    .catch((error) => {
        console.log(error);
      });
    return data as IDeliveryInfo;
  }

}
