-- Step 1: Drop table if exists
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE bank_accounts';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

-- Step 2: Create bank_accounts table
CREATE TABLE bank_accounts (
    account_number NUMBER PRIMARY KEY,
    customer_name VARCHAR2(100),
    balance NUMBER
);
/

-- Step 3: Insert sample data
BEGIN
    INSERT INTO bank_accounts VALUES (1001, 'Arjun', 20000);
    INSERT INTO bank_accounts VALUES (1002, 'Meera', 15000);
    INSERT INTO bank_accounts VALUES (1003, 'Ravi', 5000);
    COMMIT;
END;
/

-- Step 4: Create the TransferFunds procedure
CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
) AS
    v_balance NUMBER;
BEGIN
    -- Get balance of source account
    SELECT balance INTO v_balance
    FROM bank_accounts
    WHERE account_number = p_from_account;

    -- Check for sufficient funds
    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account');
    END IF;

    -- Deduct amount from source
    UPDATE bank_accounts
    SET balance = balance - p_amount
    WHERE account_number = p_from_account;

    -- Add amount to destination
    UPDATE bank_accounts
    SET balance = balance + p_amount
    WHERE account_number = p_to_account;

    DBMS_OUTPUT.PUT_LINE(
        'Transfer of ' || p_amount || ' successful from Account ' || p_from_account ||
        ' to Account ' || p_to_account
    );

    COMMIT;
END;
/

-- Step 5: Execute the transfer
BEGIN
    TransferFunds(1001, 1002, 3000);
END;
/

-- Step 6: Verify account balances
SELECT * FROM bank_accounts;