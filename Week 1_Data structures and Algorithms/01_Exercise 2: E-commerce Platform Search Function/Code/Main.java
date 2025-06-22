package com.example.search;

public class Main {

    static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) {
                return p;
            }
        }
        return null;
    }

    static Product binarySearch(Product[] products, int targetId) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].productId == targetId) {
                return products[mid];
            } 
            else if (products[mid].productId < targetId) {
                low = mid + 1;
            } 
            else {
                high = mid - 1;
            }
        }

        return null;
    }

    static void sortProductsById(Product[] products) {
        int n = products.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (products[i].productId > products[j].productId) {
                    Product temp = products[i];
                    products[i] = products[j];
                    products[j] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        Product[] products = {
                new Product(102, "Shoes", "Footwear"),
                new Product(205, "T-shirt", "Clothing"),
                new Product(150, "Watch", "Accessories"),
                new Product(301, "Phone", "Electronics"),
                new Product(120, "Laptop", "Electronics")
        };

        System.out.println("Linear Search:");
        Product result1 = linearSearch(products, 150);
        if (result1 != null) {
            System.out.println("Product found: " + result1);
        }
        else {
            System.out.println("Product not found.");
        }
      
        sortProductsById(products);

        System.out.println("\nBinary Search:");
        Product result2 = binarySearch(products, 301);
        if (result2 != null) {
            System.out.println("Product found: " + result2);
        }
        else {
            System.out.println("Product not found.");
        }
    }
}
