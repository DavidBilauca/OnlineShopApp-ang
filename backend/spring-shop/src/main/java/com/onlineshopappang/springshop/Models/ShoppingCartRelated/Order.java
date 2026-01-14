package com.onlineshopappang.springshop.Models.ShoppingCartRelated;

import com.onlineshopappang.springshop.Models.UserRelated.BillingInfo;
import com.onlineshopappang.springshop.Models.UserRelated.DeliveryInfo;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public class Order {
    public static enum  OrderStatus {
        Created,
        Proccessing,
        Shipped,
        Delivered,
        Cancelled,
        Returned
    }

    public Order(){}

    public UUID Id;
    public UUID UserId;
    public LocalDateTime OrderDate;
    public OrderStatus Status;
    public String UserEmail;
    public BillingInfo BillingInfo;
    public DeliveryInfo DeliveryInfo;
    public List<ListItem> Items;
    public float totalAmount(){
        float total = 0f;
        for(ListItem item : Items ){
            total+= item.Product.Price * item.Quantity;
        }
        return total;
    }
}
