-- Create Customers table
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE customers';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    age NUMBER,
    balance NUMBER,
    loan_interest_rate NUMBER(5,2),
    isVIP VARCHAR2(5)
);
/

-- Create Loans table
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE loans';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    due_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
/

-- Insert sample data
BEGIN
    INSERT INTO customers VALUES (1, 'Ravi Kumar', 65, 12000, 8.50, 'FALSE');
    INSERT INTO customers VALUES (2, 'Anita Desai', 45, 9000, 9.25, 'FALSE');
    INSERT INTO customers VALUES (3, 'George Mathew', 70, 15000, 7.75, 'FALSE');
    INSERT INTO customers VALUES (4, 'Sunita Rani', 59, 8000, 9.00, 'FALSE');
    INSERT INTO customers VALUES (5, 'Thomas John', 62, 5000, 8.00, 'FALSE');

    INSERT INTO loans VALUES (101, 1, SYSDATE + 10);
    INSERT INTO loans VALUES (102, 2, SYSDATE + 35);
    INSERT INTO loans VALUES (103, 3, SYSDATE + 5);
    INSERT INTO loans VALUES (104, 4, SYSDATE + 20);
    INSERT INTO loans VALUES (105, 5, SYSDATE - 5);
    COMMIT;
END;
/
BEGIN
    FOR rec IN (
        SELECT customer_id
        FROM customers
        WHERE age > 60
    ) LOOP
        UPDATE customers
        SET loan_interest_rate = loan_interest_rate - 1
        WHERE customer_id = rec.customer_id;

        DBMS_OUTPUT.PUT_LINE('Discount applied to customer ID: ' || rec.customer_id);
    END LOOP;
    COMMIT;
END;
/