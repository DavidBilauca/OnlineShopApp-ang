package com.onlineshopappang.springshop.Models.Dtos;

import com.onlineshopappang.springshop.Models.ProductRelated.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.UUID;

@AllArgsConstructor
@Getter
public class CategoryDto {
    public UUID id;
    public String name;
    public ArrayList<CategoryDto> subcategories = new ArrayList<CategoryDto>() {};

    public CategoryDto(){}

    public CategoryDto(Category category) {
        this.name = category.Name;
    }
}
