package com.onlineshopappang.springshop.Models.ProductRelated;

import java.time.LocalDateTime;
import java.util.UUID;

public class Product {
    public Product(){
        id = UUID.randomUUID();
        createdTimestamp = LocalDateTime.now();
    }
    public Product(String title,String description,Category category,float price,int stock,float rating){
        id = UUID.randomUUID();
        createdTimestamp = LocalDateTime.now();
        this.title = title;
        this.description = description;
        this.category = category;
        categoryId = category.Id;
        this.price = price;
        this.stock = stock;
        this.rating = rating;
    }

    public UUID id;
    public LocalDateTime createdTimestamp;
    public String title;
    public Integer stock;
    public float price;

    public String description;
    public Float rating;
    public String imageURL ="";
    public UUID categoryId;
    public Category category;
}
