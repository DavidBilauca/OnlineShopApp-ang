package com.onlineshopappang.springshop.Models;

import com.onlineshopappang.springshop.Models.ProductRelated.Category;
import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.boot.jackson.autoconfigure.JacksonProperties;
import tools.jackson.databind.jsonFormatVisitors.JsonArrayFormatVisitor;

import java.util.ArrayList;
import java.util.Arrays;

public class MockData {
    // Define categories
    static Category none = new Category("None");
    static Category laptops = new Category("Laptops");
    static Category smartphones = new Category("Smartphones");
    static Category headphones = new Category("Headphones");
    static Category smartwatches = new Category("Smartwatches");
    static Category accessories = new Category("Accessories");

   public static Category[] MockCategories = new Category[]{none,laptops,smartphones,headphones,smartwatches,accessories};
   public static ArrayList<Product> MockProducts = new ArrayList<>(Arrays.asList(
        new Product("Laptop Asus ROG", "Intel Core I5, NVIDIA RTX 5060, 16 GB RAM DDR5, 1TB SSD", laptops, 7499, 0, 4.6f),
                new Product("Laptop Dell XPS 15", "Intel Core I7, NVIDIA RTX 3050, 16 GB RAM, 512 GB SSD", laptops, 6999, 0, 4.4f),
                new Product("Laptop HP Envy 13", "Intel Core I5, Intel Iris Xe, 8 GB RAM, 256 GB SSD", laptops, 4299, 0, 4.1f),
                new Product("Smartphone Galaxy S25", "6.7\" OLED, Exynos 2500, 12 GB RAM, 256 GB", smartphones, 3999, 0, 4.7f),
                new Product("Smartphone Pixel 8", "6.2\" OLED, Google Tensor G4, 8 GB RAM, 128 GB", smartphones, 3299, 0, 4.5f),
                new Product("Smartphone OnePlus 13", "6.8\" AMOLED, Snapdragon 8 Gen 4, 12 GB RAM, 256 GB", smartphones, 3499, 0, 4.3f),
                new Product("Wireless Headphones Bose QC45", "Active Noise Cancelling, 24h battery, Bluetooth 5.2", headphones, 1199, 0, 4.8f),
                new Product("In-Ear Headphones Sony WF-1000XM5", "Industry-leading noise cancellation, excellent sound", headphones, 999, 0, 4.7f),
                new Product("Gaming Headset HyperX Cloud II", "Surround sound, comfortable memory foam", headphones, 499, 0, 4.4f),
                new Product("Smartwatch Apple Watch Series 9", "Always-On Retina, ECG, fitness tracking", smartwatches, 2499, 0, 4.9f),
                new Product("Smartwatch Samsung Galaxy Watch", "AMOLED, long battery life, health monitoring", smartwatches, 1799, 0, 4.5f),
                new Product("Smartwatch Fitbit Versa 4", "Lightweight, great fitness features", smartwatches, 899, 0, 4.2f),
                new Product("USB-C Charger 65W", "Fast charger, compact design", accessories, 199, 0, 4.3f),
                new Product("Laptop Sleeve 15 inch", "Water-resistant, padded interior", accessories, 149, 0, 4.1f),
                new Product("Wireless Mouse Logitech MX Master", "Ergonomic, multi-device", accessories, 349, 0, 4.6f),
                new Product("Portable SSD 1TB Samsung T7", "Fast NVMe speeds, compact", accessories, 699, 0, 4.7f),
                new Product("4K Smart TV 55 inch", "HDR, Smart OS, Dolby Vision", none, 2999, 0, 4.4f),
                new Product("Bluetooth Speaker JBL Flip 6", "Waterproof, 12h battery", accessories, 399, 0, 4.5f),
                new Product("Noise Cancelling Earbuds Anker Soundcore", "Comfortable fit, good ANC", headphones, 249, 0, 4.0f),
                new Product("Refurbished Laptop Lenovo ThinkPad T14", "Business series, reliable performance", laptops, 3299, 0, 4.0f),
                new Product("Wireless Charging Pad 15W", "Fast wireless charging for compatible devices", accessories, 179, 0, 4.2f)
   ));
}
