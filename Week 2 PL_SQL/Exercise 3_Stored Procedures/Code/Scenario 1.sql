-- Drop tables if they already exist
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE savings_accounts';
EXCEPTION WHEN OTHERS THEN NULL;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE employees';
EXCEPTION WHEN OTHERS THEN NULL;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE bank_accounts';
EXCEPTION WHEN OTHERS THEN NULL;
END;
/

-- Table 1: Savings Accounts
CREATE TABLE savings_accounts (
    account_id NUMBER PRIMARY KEY,
    account_holder VARCHAR2(100),
    balance NUMBER
);
/

-- Table 2: Employees
CREATE TABLE employees (
    employee_id NUMBER PRIMARY KEY,
    employee_name VARCHAR2(100),
    department VARCHAR2(50),
    salary NUMBER
);
/

-- Table 3: Bank Accounts for Transfers
CREATE TABLE bank_accounts (
    account_number NUMBER PRIMARY KEY,
    customer_name VARCHAR2(100),
    balance NUMBER
);
/

-- Insert sample data
BEGIN
    INSERT INTO savings_accounts VALUES (1, 'Alice', 10000);
    INSERT INTO savings_accounts VALUES (2, 'Bob', 15000);
    INSERT INTO savings_accounts VALUES (3, 'Charlie', 12000);

    INSERT INTO employees VALUES (101, 'John', 'Sales', 50000);
    INSERT INTO employees VALUES (102, 'Emma', 'Sales', 52000);
    INSERT INTO employees VALUES (103, 'David', 'IT', 60000);

    INSERT INTO bank_accounts VALUES (1001, 'Arjun', 20000);
    INSERT INTO bank_accounts VALUES (1002, 'Meera', 15000);
    INSERT INTO bank_accounts VALUES (1003, 'Ravi', 5000);
    COMMIT;
END;
/
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    FOR acc IN (SELECT account_id, balance FROM savings_accounts) LOOP
        UPDATE savings_accounts
        SET balance = balance + (balance * 0.01)
        WHERE account_id = acc.account_id;

        DBMS_OUTPUT.PUT_LINE('Interest added to Account ID: ' || acc.account_id);
    END LOOP;
    COMMIT;
END;
/
BEGIN
    ProcessMonthlyInterest;
END;
/

-- Step 7: Query to verify updated balances
SELECT * FROM savings_accounts;