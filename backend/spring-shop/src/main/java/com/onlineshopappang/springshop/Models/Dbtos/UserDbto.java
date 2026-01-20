package com.onlineshopappang.springshop.Models.Dbtos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "Users")
public class UserDbto {
    @Id
    @Column(name = "Id", nullable = false)
    private UUID id;

    @Lob
    @Column(name = "Username", nullable = false)
    private String username;

    @Lob
    @Column(name = "Email", nullable = false)
    private String email;

    @Lob
    @Column(name = "AuthId", nullable = false)
    private String authId;


}