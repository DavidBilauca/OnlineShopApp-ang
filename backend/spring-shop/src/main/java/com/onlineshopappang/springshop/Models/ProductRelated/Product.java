package com.onlineshopappang.springshop.Models;

import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

public class Product {
    public Product(){
        Id = UUID.randomUUID();
        CreatedTimestamp = LocalDateTime.now();
    }
    public UUID Id;
    public LocalDateTime CreatedTimestamp;
    public String Title;
    public Integer Price;
    public Integer Stock;
    public String Description;
    public Float Rating;
    public UUID CategoryId;
}
