package com.onlineshopappang.springshop.Models.Dtos;

import com.onlineshopappang.springshop.Models.Dbtos.UserDbto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
public class UserDto {
    private UUID id;
    private String email;
    private String username;

    public UserDto() {
    }

    public UserDto(UserDbto user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.username = user.getUsername();
    }
}
