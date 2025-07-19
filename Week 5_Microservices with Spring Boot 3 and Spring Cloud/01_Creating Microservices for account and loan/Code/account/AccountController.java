package com.cognizant.account;

import org.springframework.web.bind.annotation.*;

@RestController
public class AccountController {

    @GetMapping("/accounts/{number}")
    public Account getAccountDetails(@PathVariable String number) {
        return new Account(
                number,
                25000.00,
                150000.00,
                85000.00,
                100000.00,
                5000.00
        );
    }

    static class Account {
        private String number;
        private double savings;
        private double current;
        private double stock;
        private double fixedDeposits;
        private double recurringDeposits;

        public Account(String number, double savings, double current, double stock,
                       double fixedDeposits, double recurringDeposits) {
            this.number = number;
            this.savings = savings;
            this.current = current;
            this.stock = stock;
            this.fixedDeposits = fixedDeposits;
            this.recurringDeposits = recurringDeposits;
        }

        public String getNumber() {
            return number;
        }

        public double getSavings() {
            return savings;
        }

        public double getStock() {
            return stock;
        }

        public double getCurrent() {
            return current;
        }

        public double getFixedDeposits() {
            return fixedDeposits;
        }

        public double getRecurringDeposits() {
            return recurringDeposits;
        }
    }
}