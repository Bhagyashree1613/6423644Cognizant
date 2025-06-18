package ECommerce;

import java.util.Arrays;
import java.util.Comparator;

public class SearchEngine {

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.getProductId() == targetId) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int currentId = products[mid].getProductId();

            if (currentId == targetId) {
                return products[mid];
            } else if (currentId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void sortById(Product[] products) {
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));
    }
}