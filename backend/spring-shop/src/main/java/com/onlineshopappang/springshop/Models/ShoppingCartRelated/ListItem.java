package com.onlineshopappang.springshop.Models.ShoppingCartRelated;

import com.onlineshopappang.springshop.Models.Dbtos.ListItemDbto;
import com.onlineshopappang.springshop.Models.ProductRelated.Product;

import java.util.UUID;

public class ListItem {
    public ListItem(){}
    public UUID Id;
    public UUID ListId;
    public UUID ProductId;
    public Product Product;
    public Integer Quantity;

    public ListItem(ListItemDbto item) {
        Id = item.getId();
        Product = new Product(item.getProduct());
        ProductId = item.getProduct().getId();
        Quantity = item.getQuantity();
        ListId = item.getList().getId();
    }
}
