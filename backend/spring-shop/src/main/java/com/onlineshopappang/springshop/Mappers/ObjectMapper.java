package com.onlineshopappang.springshop.Mappers;

//import com.onlineshopappang.springshop.Models.Dbtos.ProductDbto;
import com.onlineshopappang.springshop.Models.Dbtos.CategoryDbto;
import com.onlineshopappang.springshop.Models.Dbtos.ProductDbto;
import com.onlineshopappang.springshop.Models.Dtos.CategoryDto;
import com.onlineshopappang.springshop.Models.Dtos.ProductDto;
import com.onlineshopappang.springshop.Models.ProductRelated.Category;
import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import org.mapstruct.Mapper;
import org.springframework.context.annotation.Bean;

@Mapper(componentModel = "spring")
public interface ObjectMapper {
    ProductDto toDto(Product product);
    ProductDbto toDbto(Product product);

    CategoryDto toDto(Category category);
    CategoryDbto toDbto(Category category);
    Category fromDbto(CategoryDbto categoryDbto);
}
