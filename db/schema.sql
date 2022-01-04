DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;


CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  Department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  Title VARCHAR(30) NOT NULL,
  Salary DECIMAL(12,2),
  department_id INTEGER,
  foreign key (department_id)
  references Department_name(id)
  on delete set null 
);

CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INTEGER,
  role_id INTEGER,
  foreign key (role_id)
  references Title(id)
  on delete set null
);
