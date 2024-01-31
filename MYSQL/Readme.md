##### MYSQL #####

commands:

1. SHOW DATABASES;                   |   It is used to show all the databases.
2. CREATE DATABASE < DBNAME >;       |   Used for creating the new dbs.
3. USE < DBNAME >;                   |   Use for changing or for selecting the database.
4. DROP DATABASE < DBNAME >;         |
5. CREATE TABLE < table_name>(       |
   column1name datatype(size),       |
   column2name datatype.......       |
   );                                |
6. DESC < table_name>;               |
7. INSERT INTO < table_name >        |
   (column1name, column2name....)    | 
   VALUES                            |
   (data1, data2........);           |
8. INSERT INTO < table_name >        |
   (same_sequence_of_column_do_not_  |
   need_this_block)                  | 
   VALUES                            |
   (data1, data2........);

9.  SELECT * FROM < table_name >;    |
10. SELECT (columnname) from 
    < table_name >;

11. SELECT *(columnname) 
    FROM < table_name > WHERE=
    (condition);

12. UPDATE < table_name > SET
    (columnname = value)
    WHERE (condition);




#### CLAUSES ####

1. WHERE : SELECT *(columnname) 
   FROM < table_name > WHERE=
   (condition);