package com.onlineshopappang.springshop.Models.UserRelated;

import com.onlineshopappang.springshop.Models.ProductRelated.Favorite;
import com.onlineshopappang.springshop.Models.ShoppingCartRelated.ListItem;
import com.onlineshopappang.springshop.Models.ShoppingCartRelated.Order;

import java.util.List;
import java.util.UUID;

public class User {
    public User(){}
    public UUID Id;
    public String Username;
    public String Email;
    public List<ListItem> ShoppingCart;
    public BillingInfo BillingInfo;
    public DeliveryInfo DeliveryInfo;
    public List<Favorite> Favorites;
    public List<Order> Orders;
}
