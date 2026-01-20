package com.onlineshopappang.springshop.Models.ProductRelated;

import jakarta.persistence.Entity;

import java.time.LocalDateTime;
import java.util.UUID;


public class Product {
    public Product(){
        Id = UUID.randomUUID();
        CreatedTimestamp = LocalDateTime.now();
    }
    public Product(String title,String description,Category category,float price,int stock,float rating){
        Id = UUID.randomUUID();
        CreatedTimestamp = LocalDateTime.now();
        this.Title = title;
        this.Description = description;
        this.Category = category;
        CategoryId = category.Id;
        this.Price = price;
        this.Stock = stock;
        this.Rating = rating;
    }
    public UUID Id;
    public LocalDateTime CreatedTimestamp;
    public String Title;
    public Integer Stock;
    public float Price;

    public String Description;
    public Float Rating;
    public String ImageURL ="";
    public UUID CategoryId;
    public Category Category;
}
