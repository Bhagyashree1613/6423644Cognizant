package SingletonPatternExample;

public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("This is the first log message.");

        Logger logger2 = Logger.getInstance();
        logger2.log("This is the second log message.");

        if (logger1 == logger2) {
            System.out.println("Both logger instances are the same (Singleton works).");
        } else {
            System.out.println("Different logger instances (Singleton failed).");
        }
    }
}
