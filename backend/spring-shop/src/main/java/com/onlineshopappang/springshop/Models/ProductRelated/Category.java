package com.onlineshopappang.springshop.Models.ProductRelated;

import com.onlineshopappang.springshop.Models.Dbtos.CategoryDbto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
public class Category {
    public Category(){}
    public Category(String name){
        Id = UUID.randomUUID();
        Name=name;
    }

    public Category(CategoryDbto categoryDbto) {
        Id = categoryDbto.getId();
        Name = categoryDbto.getName();
    }

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public UUID Id;
    public String Name;
//    public ArrayList<Category> Subcategories = new ArrayList<Category>() {
//    };
//
//    public void addSubcategories(Category[] subcategories){
//
//        for(Category c : subcategories){
//            if(
//                    Subcategories.stream()
//                            .anyMatch(existingCateg->existingCateg.Name == c.Name)
//                    == false
//            ) {
//                Subcategories.add(c);
//            }
//        }
//    }
}
