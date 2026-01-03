export interface IProduct {
    id:string,
    createdTimeStamp?:string,
    title:string,
    price:number,
    description?:string,
    rating:number = 0,
    imageURL?:string = "",
    category?:ICategory = "None",
    isFavourite?:boolean = false,
    isInShoppingCart?:boolean =false
}

export interface ICategory {
    id:string,
    name:string
}
 
export interface IUser {
    id:string,
    authId:string,
    username:string,
    email:string,
    shoppingCart?: IListItem[],
    billingInfo?: IBillingInfo[],
    deliveryInfo?: IDeliveryInfo[],
    favorites?: IProduct[],
    orders?: IOrder[]

}  

export interface IListItem {
    id:string,
    productId:string,
    product: IProduct,
    quantity: number
 }

export interface IBillingInfo {
    id:string,
    userId: string,
    sameAsShipping: boolean,
    fullName: string,
    country: string,
    state?: string,
    county?: string,
    district?: string
    city: string,
    streetAddress: string,
    zipCode: string,
    phoneNumber: string,
}
export interface IDeliveryInfo {
    id:string,
    userId: string,
    country: string,
    state?: string,
    county?: string,
    district?: string
    city: string,
    streetAddress: string,
    zipCode: string,
}

export interface IOrder {
    id:string,
    userId:string,
    orderDate: Date,
    status: OrderStatus,
    userEmail: string,
    billingInfo: IBillingInfo,
    deliveryInfo?: IDeliveryInfo,
    items: IListItem[],
    totalAmount: number
}

export enum OrderStatus {
    Created,
    Processing,
    Shipped,
    Delivered,
    Cancelled,
    Returned
}