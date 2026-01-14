package com.onlineshopappang.springshop.Models.ProductRelated;

import java.time.LocalDateTime;
import java.util.UUID;

public class Product {
    public Product(){
        Id = UUID.randomUUID();
        CreatedTimestamp = LocalDateTime.now();
    }
    public UUID Id;
    public LocalDateTime CreatedTimestamp;
    public String Title;
    public float Price;
    public Integer Stock;
    public String Description;
    public Float Rating;
    public UUID CategoryId;
}
