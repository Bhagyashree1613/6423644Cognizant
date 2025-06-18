package FinancialForecasting;

public class Main {
    public static void main(String[] args) {
        double presentValue = 10000; // Initial investment
        double rate = 0.05;          // 5% growth rate
        int years = 3;               // Forecasting for 3 years

        double futureValue = calculateFutureValue(presentValue, rate, years);
        System.out.println("Future Value after " + years + " years: Rs." + futureValue);
    }

    public static double calculateFutureValue(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        } else {
            return calculateFutureValue(presentValue * (1 + rate), rate, years - 1);
        }
    }
}
