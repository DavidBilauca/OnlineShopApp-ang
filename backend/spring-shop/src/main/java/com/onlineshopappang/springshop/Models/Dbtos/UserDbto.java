package com.onlineshopappang.springshop.Models.Dbtos;

import com.onlineshopappang.springshop.Models.UserRelated.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "users")
public class UserDbto {
    @Id
    @Column(name = "id", nullable = false)
    private UUID id;

    @Column(name = "username", nullable = false, length = 50)
    private String username;

    @Column(name = "email", nullable = false, length = 254)
    private String email;

    @Column(name="favorites")
    private ArrayList<UUID> favorites;

    public UserDbto(User user) {
        this.email = user.Email;
        this.id = user.Id;
        this.username = user.Username;
    }

    public UserDbto() {

    }
}