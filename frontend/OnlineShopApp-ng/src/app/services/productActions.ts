import { IProduct } from "../../types";
import { ProductAPI } from "./productAPI";

export const toggleFavoriteAction = async (productAPI:ProductAPI,productId:string):Promise<boolean> =>{
    var state:boolean = false;
     productAPI.setFavorite(productId).then(result=>{
        state = result;
    })
    return state;
}

export const addToCart = async (productAPI:ProductAPI,product:IProduct):Promise<boolean> =>{
    var state:boolean = false;
    //  productAPI.setFavorite(product.id).then(result=>{
    //     state = result;
    // })
    return state;
}