INSERT INTO department (name)
VALUES('Managment'),
('Production')
('Marketing')
('Human Resources')


INSERT INTO roles (title, salary, department_id )
VALUES('Manager', 120000, 1)
('Engineer', 160000, 2)
('Marketer', 60000, 3)
('HR Manager', 85000, 4),
('HR Associate', 60000, 4);

INSERT INTO employee ( first_name, last_name, role_id)
VALUES( 'Horatious', 'Harris',1 )
('Johnny', 'Appleseed', 3)
( 'Zacko', 'Moondou', 2)