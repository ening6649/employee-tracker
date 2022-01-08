
insert into department
    (Department_name)
values 
    ('clothing'),
    ('electronics');

insert into role
	(Title, Salary, department_id)
values
	('associate', '50000.21', '1'),
    ('senior associate', '60001.43', '2');
    
insert into employee 
    (first_name, last_name, role_id)
values 
 ('john', 'doe', '1' ),
 ('jane','shoe', '2');