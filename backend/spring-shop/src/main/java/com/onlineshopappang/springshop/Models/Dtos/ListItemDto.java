package com.onlineshopappang.springshop.Models.Dtos;

import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import com.onlineshopappang.springshop.Models.ShoppingCartRelated.ListItem;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
public class ListItemDto {
    public ListItemDto(){}

    public UUID id;
    public UUID listId;
    public UUID productId;
    public Product product;
    public Integer quantity;

    public ListItemDto(ListItem item) {
        this.id = item.Id;
        this.product = item.Product;
        this.productId = item.ProductId;
        this.quantity = item.Quantity;
        this.listId = item.ListId;
    }
}
