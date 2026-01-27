package com.onlineshopappang.springshop.Models.ProductRelated;

import com.onlineshopappang.springshop.Models.Dbtos.ProductDbto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
public class Product {

    public UUID Id;
    public LocalDateTime CreatedTimestamp;
    public String Title;
    public Integer Stock;
    public float Price;

    public String Description;
    public Float Rating;
    public String ImageURL ="";
    public UUID CategoryId;
    //public Category Category;

    public Product(){
        Id = UUID.randomUUID();
        CreatedTimestamp = LocalDateTime.now();
    }
    public Product(ProductDbto product) {
        //Category = product.getCategoryId();
        CategoryId = product.getCategoryId();
        CreatedTimestamp = product.getCreatedTimestamp();
        Description = product.getDescription();
        Id = product.getId();
        ImageURL = product.getImageUrl();
        Price = product.getPrice();
        Rating = product.getRating();
        Stock = product.getStock();
        Title = product.getTitle();
    }
    public Product(String title, String description, Category category, float price, int stock, float rating){
        Id = UUID.randomUUID();
        CreatedTimestamp = LocalDateTime.now();
        this.Title = title;
        this.Description = description;
        //this.Category = category;
        this.CategoryId = category.Id;
        this.Price = price;
        this.Stock = stock;
        this.Rating = rating;
    }
    public Product(String title, String description, UUID categoryId, float price, int stock, float rating){
        Id = UUID.randomUUID();
        CreatedTimestamp = LocalDateTime.now();
        this.Title = title;
        this.Description = description;
        this.CategoryId = categoryId;
        this.Price = price;
        this.Stock = stock;
        this.Rating = rating;
    }

}
