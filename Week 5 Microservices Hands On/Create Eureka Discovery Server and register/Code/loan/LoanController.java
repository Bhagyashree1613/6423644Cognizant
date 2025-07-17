package com.cognizant.loan;

import org.springframework.web.bind.annotation.*;

@RestController
public class LoanController {

    @GetMapping("/loans/{number}")
    public String getLoanDetails(@PathVariable String number) {
        return "Loan details for account number: " + number;
    }
}
