-- Step 1: Drop table if exists
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE employees';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

-- Step 2: Create the employees table
CREATE TABLE employees (
    employee_id NUMBER PRIMARY KEY,
    employee_name VARCHAR2(100),
    department VARCHAR2(50),
    salary NUMBER
);
/

-- Step 3: Insert sample employees
BEGIN
    INSERT INTO employees VALUES (101, 'John', 'Sales', 50000);
    INSERT INTO employees VALUES (102, 'Emma', 'Sales', 52000);
    INSERT INTO employees VALUES (103, 'David', 'IT', 60000);
    INSERT INTO employees VALUES (104, 'Sara', 'HR', 45000);
    COMMIT;
END;
/

-- Step 4: Create the stored procedure to update bonuses
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
) AS
BEGIN
    FOR emp IN (
        SELECT employee_id, salary
        FROM employees
        WHERE department = p_department
    ) LOOP
        UPDATE employees
        SET salary = salary + (salary * p_bonus_percent / 100)
        WHERE employee_id = emp.employee_id;

        DBMS_OUTPUT.PUT_LINE('Bonus added to Employee ID: ' || emp.employee_id);
    END LOOP;
    COMMIT;
END;
/

-- Step 5: Execute the procedure (e.g., 10% bonus to Sales)
BEGIN
    UpdateEmployeeBonus('Sales', 10);
END;
/

-- Step 6: Verify updated salaries
SELECT * FROM employees;