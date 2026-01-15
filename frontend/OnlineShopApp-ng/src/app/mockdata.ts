import { ICategory, IProduct,IUser } from "../types";

const None:ICategory = {
        id: "c0",
        name: "None"
    };
    
const Laptops:ICategory = {
    id: "c1",
    name: "Laptops"
}

const Smartphones:ICategory = {
    id: "c2",
    name: "Smartphones"
}

const Headphones:ICategory = {
    id: "c3",
    name: "Headphones"
}

const Smartwatches:ICategory = {
    id: "c4",
    name: "Smartwatches"
}

const Accessories:ICategory = {
    id: "c5",
    name: "Accessories"
}

export const Categories = {
    None: None,
    Laptops: Laptops,
    Smartphones: Smartphones,
    Headphones: Headphones,
    Smartwatches: Smartwatches,
    Accessories: Accessories,
    getCategories: () =>{
        return [None,Laptops,Smartphones,Headphones,Smartwatches,Accessories];
    }
}

export const MockProducts:IProduct[] = [
    {
        id: "p0",
        title: "Laptop Asus ROG",
        description: "Intel Core I5, NVIDIA RTX 5060, 16 GB RAM DDR5, 1TB SSD",
        category: Laptops,
        categoryId:Laptops.id,
        price: 7499,
        rating: 4.6
    },
    {
        id: "p1",
        title: "Laptop Dell XPS 15",
        description: "Intel Core I7, NVIDIA RTX 3050, 16 GB RAM, 512 GB SSD",
        category: Laptops,
        categoryId:Laptops.id,
        price: 6999,
        rating: 4.4
    },
    {
        id: "p2",
        title: "Laptop HP Envy 13",
        description: "Intel Core I5, Intel Iris Xe, 8 GB RAM, 256 GB SSD",
        category: Laptops,
        categoryId:Laptops.id,
        price: 4299,
        rating: 4.1
    },
    {
        id: "p3",
        title: "Smartphone Galaxy S25",
        description: "6.7" + "" + " OLED, Exynos 2500, 12 GB RAM, 256 GB",
        category: Smartphones,
        categoryId:Smartphones.id,
        price: 3999,
        rating: 4.7
    },
    {
        id: "p4",
        title: "Smartphone Pixel 8",
        description: "6.2" + "" + " OLED, Google Tensor G4, 8 GB RAM, 128 GB",
        category: Smartphones,
        categoryId:Smartphones.id,
        price: 3299,
        rating: 4.5
    },
    {
        id: "p5",
        title: "Smartphone OnePlus 13",
        description: "6.8" + "" + " AMOLED, Snapdragon 8 Gen 4, 12 GB RAM, 256 GB",
        category: Smartphones,
        categoryId:Smartphones.id,
        price: 3499,
        rating: 4.3
    },
    {
        id: "p6",
        title: "Wireless Headphones Bose QC45",
        description: "Active Noise Cancelling, 24h battery, Bluetooth 5.2",
        category: Headphones,
        categoryId:Headphones.id,
        price: 1199,
        rating: 4.8
    },
    {
        id: "p7",
        title: "In-Ear Headphones Sony WF-1000XM5",
        description: "Industry-leading noise cancellation, excellent sound",
        category: Headphones,
        categoryId:Headphones.id,
        price: 999,
        rating: 4.7
    },
    {
        id: "p8",
        title: "Gaming Headset HyperX Cloud II",
        description: "Surround sound, comfortable memory foam",
        category: Headphones,
        categoryId:Headphones.id,
        price: 499,
        rating: 4.4
    },
    {
        id: "p9",
        title: "Smartwatch Apple Watch Series 9",
        description: "Always-On Retina, ECG, fitness tracking",
        category: Smartwatches,
        categoryId:Smartwatches.id,
        price: 2499,
        rating: 4.9
    },
    {
        id: "p10",
        title: "Smartwatch Samsung Galaxy Watch",
        description: "AMOLED, long battery life, health monitoring",
        category: Smartwatches,
        categoryId:Smartwatches.id,
        price: 1799,
        rating: 4.5
    },
    {
        id: "p11",
        title: "Smartwatch Fitbit Versa 4",
        description: "Lightweight, great fitness features",
        category: Smartwatches,
       categoryId:Smartwatches.id,
         price: 899,
        rating: 4.2
    },
    {
        id: "p12",
        title: "USB-C Charger 65W",
        description: "Fast charger, compact design",
        category: Accessories,
        categoryId:Accessories.id,
        price: 199,
        rating: 4.3
    },
    {
        id: "p13",
        title: "Laptop Sleeve 15 inch",
        description: "Water-resistant, padded interior",
        category: Accessories,
        categoryId:Accessories.id,
        price: 149,
        rating: 4.1
    },
    {
        id: "p14",
        title: "Wireless Mouse Logitech MX Master",
        description: "Ergonomic, multi-device"
        ,category: Accessories,
        categoryId:Accessories.id,
        price: 349,
        rating: 4.6
    },
    {
        id: "p15",
        title: "Portable SSD 1TB Samsung T7",
        description: "Fast NVMe speeds, compact",
        category: Accessories,
        categoryId:Accessories.id,
        price: 699,
        rating: 4.7
    },
    {
        id: "p16",
        title: "4K Smart TV 55 inch",
        description: "HDR, Smart OS, Dolby Vision",
        category: None,
       categoryId:None.id,
         price: 2999,
        rating: 4.4
    },
    {
        id: "p17",
        title: "Bluetooth Speaker JBL Flip 6",
        description: "Waterproof, 12h battery",
        category: Accessories,
        categoryId:Accessories.id,
        price: 399,
        rating: 4.5
    },
    {
        id: "p18",
        title: "Noise Cancelling Earbuds Anker Soundcore",
        description: "Comfortable fit, good ANC",
        category: Headphones,
        categoryId:Headphones.id,
        price: 249,
        rating: 4.0
    },
    {
        id: "p19",
        title: "Refurbished Laptop Lenovo ThinkPad T14",
        description: "Business series, reliable performance",
        category: Laptops,
        categoryId:Laptops.id,
        price: 3299,
        rating: 4.0
    },
    {
        id: "p20",
        title: "Wireless Charging Pad 15W",
        description: "Fast wireless charging for compatible devices",
        category: Accessories,
        categoryId:Accessories.id,
        price: 179,
        rating: 4.2
    }
]




