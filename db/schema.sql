DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;


CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  Department_name VARCHAR(50) NOT NULL,
);

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  Title VARCHAR(30) NOT NULL,
  Salary DECIMAL,
  department_id INTEGER,
--   industry_connected BOOLEAN NOT NULL,
  CONSTRAINT fk_party
    FOREIGN KEY (party_id)
    REFERENCES parties(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INTEGER,
  role_id INTEGER
);
