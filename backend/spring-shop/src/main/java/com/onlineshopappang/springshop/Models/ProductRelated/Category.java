package com.onlineshopappang.springshop.Models.ProductRelated;

import lombok.AllArgsConstructor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@AllArgsConstructor
public class Category {
    public Category(){}
    public Category(String name){
        Id = UUID.randomUUID();
        Name=name;
    }

    public UUID Id;
    public String Name;
    public ArrayList<Category> Subcategories = new ArrayList<Category>() {
    };

    public void addSubcategories(Category[] subcategories){

        for(Category c : subcategories){
            if(
                    Subcategories.stream()
                            .anyMatch(existingCateg->existingCateg.Name == c.Name)
                    == false
            ) {
                Subcategories.add(c);
            }
        }
    }
}
