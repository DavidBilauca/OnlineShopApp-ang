import { IProduct } from "../../types";
import { ProductAPI } from "./productAPI";


export const addToCart = async (productAPI:ProductAPI,product:IProduct):Promise<boolean> =>{
    var state:boolean = false;
    //  productAPI.setFavorite(product.id).then(result=>{
    //     state = result;
    // })
    return state;
}