package com.example.FinancialForecasting;

public class FinancialForecasting {

    static double calculateFutureValue(double currentValue, double rate, int years) {
  
        if (years == 0) {
            return currentValue;
        }

        double previousYearValue = calculateFutureValue(currentValue, rate, years - 1);
        return previousYearValue * (1 + rate);
    }

    public static void main(String[] args) {
        
        double initialValue = 10000; 
        double growthRate = 0.10;    
        int years = 5;               

        double futureValue = calculateFutureValue(initialValue, growthRate, years);

        System.out.println("Future value after " + years + " years: Rs. " + futureValue);
    }
}
