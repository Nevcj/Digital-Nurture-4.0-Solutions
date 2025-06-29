package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTestAAA {
    private CalculatorAAA calc;

    @Before
    public void setUp() {
        calc = new CalculatorAAA();
        System.out.println("Setup complete");
    }

    @After
    public void tearDown() {
        System.out.println("Cleanup done\n");
    }

    @Test
    public void testAddition() {

        int a = 2, b = 3;
        int result = calc.add(a, b);
        assertEquals(5, result);
    }

    @Test
    public void testMultiplication() {

        int a = 4, b = 3;
        int result = calc.multiply(a, b);
        assertEquals(12, result);
    }
}
