DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;




CREATE TABLE department(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  Department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  Title VARCHAR(30) NOT NULL,
  Salary DECIMAL(12,2),
  department_id INTEGER,
  foreign key (department_id)
  references department(id)
  ON DELETE SET NULL 
);

CREATE TABLE employee(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INTEGER,
  role_id INTEGER,
  foreign key (role_id)
  references role(id)
  on delete set null
);

select*from role
left join department on role.department_id = department.id; 

select*from employee
left join role on employee.role_id = role.id;

SELECT
  books.book_name AS book_name, prices.price AS price
FROM books
JOIN prices ON books.price = prices.id;




-- cut off
select
	Title,
    salary,
    Department_name
from role
left join department on role.department_id = department.id; 

select
   employee.employeeid,
   first_name,
   last_name,
   manager_id,
   Title,
   Salary,
   Department_name
from employee
join role on employee.role_id = role.id;
