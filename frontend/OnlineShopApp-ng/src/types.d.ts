import { Categories } from "./app/mockdata"

export interface IProduct {
    id:string,
    createdTimeStamp?:string,
    title:string,
    price:number,
    description?:string,
    rating:number = 0,
    imageURL?:string = "",
    category:ICategory = Categories.None,
    categoryId:string;
    isFavourite?:boolean = false,
    isInShoppingCart?:boolean =false
}

export interface ICategory {
    id:string,
    name:string,
    subcategories?:ICategory[]
}
 
export interface IUser {
    id:string,
    authId?:string,
    username:string,
    email:string,
    shoppingCart: IListItem[],
    billingInfo?: IBillingInfo[],
    deliveryInfo?: IDeliveryInfo[],
    favorites: IProduct[] = [],
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

export interface Filters{
    categories:ICategory[],
    viewMode:string
  }

export const enum OrderStatus {
    Created,
    Processing,
    Shipped,
    Delivered,
    Cancelled,
    Returned
}

export const phoneNumberPrefixes: {country:string,prefix:string}[] = [
    { country: 'United States', prefix: '+1' },
    { country: 'Canada', prefix: '+1' },
    { country: 'United Kingdom', prefix: '+44' },
    { country: 'Germany', prefix: '+49' },
    { country: 'France', prefix: '+33' },
    { country: 'Australia', prefix: '+61' },
    { country: 'Japan', prefix: '+81' },
    { country: 'China', prefix: '+86' },
    { country: 'India', prefix: '+91' },
    { country: 'Brazil', prefix: '+55' },
    { country: 'Mexico', prefix: '+52' },
    { country: 'South Korea', prefix: '+82' },
    { country: 'Italy', prefix: '+39' },
    { country: 'Spain', prefix: '+34' },
    { country: 'Netherlands', prefix: '+31' },
    { country: 'Sweden', prefix: '+46' },
    { country: 'Norway', prefix: '+47' },
    { country: 'Denmark', prefix: '+45' },
    { country: 'Finland', prefix: '+358' },
    { country: 'Singapore', prefix: '+65' },
    { country: 'New Zealand', prefix: '+64' },
    { country: 'Austria', prefix: '+43' },
    { country: 'Belgium', prefix: '+32' },
    { country: 'Czech Republic', prefix: '+420' },
    { country: 'Poland', prefix: '+48' },
    { country: 'Portugal', prefix: '+351' },
    { country: 'Greece', prefix: '+30' },
    { country: 'Hungary', prefix: '+36' },
    { country: 'Romania', prefix: '+40' },
    { country: 'Ireland', prefix: '+353' },
    { country: 'Switzerland', prefix: '+41' },
    { country: 'Croatia', prefix: '+385' },
    { country: 'Slovakia', prefix: '+421' },
    { country: 'Slovenia', prefix: '+386' },
    { country: 'Bulgaria', prefix: '+359' },
    { country: 'Lithuania', prefix: '+370' },
    { country: 'Latvia', prefix: '+371' },
    { country: 'Estonia', prefix: '+372' },
    { country: 'Luxembourg', prefix: '+352' },
    { country: 'Malta', prefix: '+356' },
    { country: 'Cyprus', prefix: '+357' },
    { country: 'Serbia', prefix: '+381' },
    { country: 'Ukraine', prefix: '+380' }
  ];

