package com.onlineshopappang.springshop.Mappers;

import com.onlineshopappang.springshop.Models.Dbtos.CategoryDbto;
import com.onlineshopappang.springshop.Models.ProductRelated.Category;
import com.onlineshopappang.springshop.Models.Dtos.CategoryDto;
import org.mapstruct.Mapper;

@Mapper(componentModel="spring")
public interface CategoryMapper {
    CategoryDto toDto(Category category);
    CategoryDbto toDbto(Category category);
}
