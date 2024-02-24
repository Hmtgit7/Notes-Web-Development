##### MYSQL 

commands:

1.  SHOW DATABASES;

2.  CREATE DATABASE < DBNAME >;

3.  USE < DBNAME >;

4.  DROP DATABASE < DBNAME >;

5.  CREATE TABLE < table_name> ( column1name datatype(size), column2name datatype.......);

6.  DESC < table_name>;

7.  INSERT INTO < table_name > (column1name, column2name....) VALUES (data1, data2........);

8.  INSERT INTO < table_name > (same_sequence_of_column_do_not_need_this_block) VALUES (data1, data2........);

9.  SELECT * FROM < table_name >;

10. SELECT (columnname) from < table_name >;

11. SELECT *(columnname) FROM < table_name > WHERE = (condition);

12. UPDATE < table_name > SET (columnname = value) WHERE (condition);

13. DELETE FROM < table_name > WHERE ( condition );

14. DROP TABLE < table_name >;

15. CREATE TABLE < table_name> ( column1name datatype(size) NOT NULL, column2name datatype.......);

16. CREATE TABLE < table_name> ( column1name datatype(size) DEFAULT ( 'value' ), column2name datatype.......);
    
    e.g.
       CREATE TABLE customer(
                name VARCHAR(50),
                acc_type VARCHAR(100) DEFAULT 'Saving'
               );

17. i.  CREATE TABLE table_name(
                column1name datatype PRIMARY KEY,
                column1name datatype.........
               );
    ii. CREATE TABLE table_name(
                column1name datatype,
                column1name datatype.........,
                PRIMARY KEY(columnname)
               );

18. CREATE TABLE table_name(
                column1name datatype PRIMARY KEY AUTO_INCREAMENT,
                column1name datatype.........,
                PRIMARY KEY(columnname)
               );

19. SELECT columnname AS ('alias_name') FROM (table_name);
    
    e.g. 
      SELECT acc_no AS 'Account No.' 

20. 


#### CLAUSES

1. WHERE : SELECT *(columnname) FROM < table_name > WHERE = (condition);

    e.g.
        SELECT name FROM employee WHERE student_id==18;


## Primary Key:
            1. The primary key constraints uniquely identifies each record in a table.
            2. Primary key must contain unique values and cannot contain NULL values.
            3. A table can have only one primary key.

            e.g. 
               CREATE TABLE customer(
                acc_no INT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                acc_type VARCHAR(50) NOT NULL DEFAULT '( VALUE)'
               );

            CREATE TABLE customer(
                acc_no INT,
                name VARCHAR(100) NOT NULL,
                acc_type VARCHAR(50) NOT NULL DEFAULT '( VALUE)',
                PRIMARY KEY(acc_no)
               );

## Foreign Key: