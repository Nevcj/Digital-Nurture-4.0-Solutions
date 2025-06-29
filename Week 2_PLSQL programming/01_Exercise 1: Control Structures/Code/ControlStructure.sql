CREATE TABLE customers (
  customer_id         NUMBER PRIMARY KEY,
  customer_name       VARCHAR2(100),
  age                 NUMBER,
  balance             NUMBER(10,2),
  loan_interest_rate  NUMBER(5,2),
  isvip               VARCHAR2(5) DEFAULT 'FALSE'
);

CREATE TABLE loans (
  loan_id       NUMBER PRIMARY KEY,
  customer_id   NUMBER,
  due_date      DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO customers VALUES (1, 'Ravi', 65, 12000, 10.5, 'FALSE');
INSERT INTO customers VALUES (2, 'Anita', 45, 8000, 11.0, 'FALSE');
INSERT INTO customers VALUES (3, 'Manoj', 70, 20000, 12.0, 'FALSE');

INSERT INTO loans VALUES (101, 1, SYSDATE + 10);
INSERT INTO loans VALUES (102, 2, SYSDATE + 40);
INSERT INTO loans VALUES (103, 3, SYSDATE + 5);

COMMIT;

SET SERVEROUTPUT ON;

BEGIN
  FOR rec IN (SELECT customer_id, age, loan_interest_rate FROM customers) LOOP
    IF rec.age > 60 THEN
      UPDATE customers
      SET loan_interest_rate = loan_interest_rate - 1
      WHERE customer_id = rec.customer_id;
    END IF;
  END LOOP;
  COMMIT;
END;

BEGIN
  FOR rec IN (SELECT customer_id, balance FROM customers) LOOP
    IF rec.balance > 10000 THEN
      UPDATE customers
      SET isvip = 'TRUE'
      WHERE customer_id = rec.customer_id;
    END IF;
  END LOOP;
  COMMIT;
END;

BEGIN
  FOR rec IN (
    SELECT l.loan_id, c.customer_name, l.due_date
    FROM loans l
    JOIN customers c ON l.customer_id = c.customer_id
    WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Loan ID: ' || rec.loan_id || ' - ' ||rec.customer_name || 
                         ' is due on ' || TO_CHAR(rec.due_date, 'DD-Mon-YYYY'));
  END LOOP;
END;
