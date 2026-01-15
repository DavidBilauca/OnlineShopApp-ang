package com.onlineshopappang.springshop.Services;

import com.onlineshopappang.springshop.Models.ProductRelated.Product;

import java.util.UUID;
import java.util.function.Function;
import java.util.function.Predicate;


public interface IRepository<T> {
    void Create(T entity);

    Iterable<T> GetAll();

    T GetById(UUID entityId);

    Iterable<T> GetByFilter(Predicate<T> filter);

    void Update(T entity);

    void Delete(UUID entityId);
}
