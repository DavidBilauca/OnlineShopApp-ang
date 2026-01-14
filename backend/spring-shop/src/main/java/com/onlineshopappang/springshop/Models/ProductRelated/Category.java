package com.onlineshopappang.springshop.Models.ProductRelated;

import java.util.UUID;

public class Category {
    public Category(){}
    public UUID Id;
    public String Name;
    public Category[] Subcategories;
}
