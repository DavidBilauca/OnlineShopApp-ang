package com.onlineshopappang.springshop.Mappers;

import com.onlineshopappang.springshop.Models.ProductRelated.Dtos.ProductDto;
import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductDto toDto(Product product);
}
