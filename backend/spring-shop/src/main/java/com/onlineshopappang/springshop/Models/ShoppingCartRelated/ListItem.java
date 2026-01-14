package com.onlineshopappang.springshop.Models.ShoppingCartRelated;

import com.onlineshopappang.springshop.Models.ProductRelated.Product;

import java.util.UUID;

public class ListItem {
    public ListItem(){}
    public UUID Id;
    public UUID UserId;
    public UUID ProductId;
    public Product Product;
    public Integer Quantity;
}
