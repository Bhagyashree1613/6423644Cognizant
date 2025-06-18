package ECommerce;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(103, "Laptop", 10, 55000.00),
            new Product(101, "Keyboard", 50, 800.00),
            new Product(105, "Mouse", 100, 400.00)
        };

        // Linear Search
        Product linearResult = SearchEngine.linearSearch(products, 101);
        System.out.println("Linear Search Result: " + (linearResult != null ? linearResult : "Not Found"));

        // Sort before Binary Search
        SearchEngine.sortById(products);

        // Binary Search
        Product binaryResult = SearchEngine.binarySearch(products, 105);
        System.out.println("Binary Search Result: " + (binaryResult != null ? binaryResult : "Not Found"));
    }
}
