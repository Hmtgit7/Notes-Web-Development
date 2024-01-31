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

#### CLAUSES

1. WHERE : SELECT *(columnname) FROM < table_name > WHERE = (condition);