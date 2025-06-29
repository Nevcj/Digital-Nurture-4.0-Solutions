CREATE TABLE accounts (
  account_id      NUMBER PRIMARY KEY,
  account_type    VARCHAR2(20),
  balance         NUMBER(12,2)
);

CREATE TABLE employees (
  emp_id      NUMBER PRIMARY KEY,
  name        VARCHAR2(100),
  department  VARCHAR2(50),
  salary      NUMBER(10,2)
);

INSERT INTO accounts VALUES (101, 'Savings', 5000);
INSERT INTO accounts VALUES (102, 'Savings', 10000);
INSERT INTO accounts VALUES (103, 'Current', 15000);
INSERT INTO accounts VALUES (104, 'Savings', 8000);

INSERT INTO employees VALUES (1, 'Ravi', 'IT', 50000);
INSERT INTO employees VALUES (2, 'Anita', 'HR', 45000);
INSERT INTO employees VALUES (3, 'Manoj', 'IT', 60000);
INSERT INTO employees VALUES (4, 'Divya', 'Sales', 40000);

COMMIT;

SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  FOR acc IN (
    SELECT account_id, balance
    FROM accounts
    WHERE LOWER(account_type) = 'savings'
  ) LOOP
    UPDATE accounts
    SET balance = acc.balance + (acc.balance * 0.01)
    WHERE account_id = acc.account_id;
  END LOOP;

  COMMIT;
END;

BEGIN
  ProcessMonthlyInterest;
END;

SELECT * FROM accounts;


CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  dept_name IN VARCHAR2,
  bonus_percent IN NUMBER
) IS
BEGIN
  UPDATE employees
  SET salary = salary + (salary * bonus_percent / 100)
  WHERE department = dept_name;

  COMMIT;
END;

BEGIN
  UpdateEmployeeBonus('IT', 10);
END;

SELECT * FROM employees;


CREATE OR REPLACE PROCEDURE TransferFunds (
  from_account_id IN NUMBER,
  to_account_id   IN NUMBER,
  amount          IN NUMBER
) IS
  insufficient_balance EXCEPTION;
  src_balance NUMBER;
BEGIN
  -- Get balance from source account
  SELECT balance INTO src_balance
  FROM accounts
  WHERE account_id = from_account_id;

  -- Check balance
  IF src_balance < amount THEN
    RAISE insufficient_balance;
  END IF;

  -- Deduct and transfer
  UPDATE accounts
  SET balance = balance - amount
  WHERE account_id = from_account_id;

  UPDATE accounts
  SET balance = balance + amount
  WHERE account_id = to_account_id;

  COMMIT;

EXCEPTION
  WHEN insufficient_balance THEN
    DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance.');
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Transfer failed: Account not found.');
END;

BEGIN
  TransferFunds(102, 104, 2000);
END;

SELECT * FROM accounts;
