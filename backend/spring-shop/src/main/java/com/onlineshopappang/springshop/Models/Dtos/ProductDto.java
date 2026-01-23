package com.onlineshopappang.springshop.Models.Dtos;

import com.onlineshopappang.springshop.Models.ProductRelated.Category;
import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.UUID;

@AllArgsConstructor
@Getter
public class ProductDto {


    public UUID id;
    public LocalDateTime createdTimestamp;
    public String title;
    public float price;
    //public int stock;
    public String description;
    public Float rating = 0f;
    public String imageURL = "";
    public UUID categoryId;
    public Category category;

    public ProductDto() {
    }

    public ProductDto(Product product) {
        this.createdTimestamp = product.CreatedTimestamp;
        this.title = product.Title;
        this.description = product.Description;
        this.price = product.Price;
        this.rating = product.Rating;
        this.imageURL = product.ImageURL;
        this.categoryId = product.CategoryId;
        //this.category = product.Category;
    }

}
