package com.cognizant.loan;

import org.springframework.web.bind.annotation.*;

@RestController
public class LoanController {

    @GetMapping("/loans/{number}")
    public Loan getLoanDetails(@PathVariable String number) {
        return new Loan(
                number,
                300000.00,
                500000.00,
                200000.00,
                75000.00
        );
    }

    static class Loan {
        private String number;
        private double personalLoan;
        private double carLoan;
        private double goldLoan;
        private double twoWheelerLoan;

        public Loan(String number, double personalLoan, double carLoan,
                    double goldLoan, double twoWheelerLoan) {
            this.number = number;
            this.personalLoan = personalLoan;
            this.carLoan = carLoan;
            this.goldLoan = goldLoan;
            this.twoWheelerLoan = twoWheelerLoan;
        }

        public String getNumber() {
            return number;
        }

        public double getPersonalLoan() {
            return personalLoan;
        }

        public double getCarLoan() {
            return carLoan;
        }

        public double getGoldLoan() {
            return goldLoan;
        }

        public double getTwoWheelerLoan() {
            return twoWheelerLoan;
        }
    }
}
