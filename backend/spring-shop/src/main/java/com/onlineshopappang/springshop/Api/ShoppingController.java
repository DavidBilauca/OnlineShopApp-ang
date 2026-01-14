package com.onlineshopappang.springshop;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ShoppingController {

    @Value("${app.somevar}")
    private String var;

    @RequestMapping("/")
    public String index(){
        System.out.println("somevar: "+var);
        return "index.html";
    }

    private String[][] getAllProducts(){
        return new String[][]{new String[]{"a"}, new String[]{"b"}};
    }
}
