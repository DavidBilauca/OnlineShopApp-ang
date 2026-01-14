package com.onlineshopappang.springshop.Services;

import java.util.UUID;
import java.util.function.Function;

public interface IRepository<T,R> {
    void Create(T entity);

    void GetAll();

    void GetById(UUID entityId);

    void GetByFilter(Function<T,R> filter);

    void Update(T entity);

    void Delete(UUID entityId);
}
