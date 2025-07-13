package com.cognizant.springlearn;

public class Country {
    private String code;
    private String name;

    public Country() {
        System.out.println(">>> Country constructor called");
    }

    public String getCode() {
        System.out.println(">>> getCode()");
        return code;
    }

    public void setCode(String code) {
        System.out.println(">>> setCode()");
        this.code = code;
    }

    public String getName() {
        System.out.println(">>> getName()");
        return name;
    }

    public void setName(String name) {
        System.out.println(">>> setName()");
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country{" + "code='" + code + '\'' + ", name='" + name + '\'' + '}';
    }
}