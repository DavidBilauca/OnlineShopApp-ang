package com.onlineshopappang.springshop.Services;

import java.util.UUID;

public interface IService<T> {
    void Create(T entity);
    void Update(T entity);
    void Delete(UUID entityId);
}
