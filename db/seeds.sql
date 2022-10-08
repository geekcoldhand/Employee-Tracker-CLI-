USE company_db;

INSERT INTO Departments VALUES('Managment'),
('Production'),
('Marketing'),
('Human Resources'),
('Sanitation');


INSERT INTO Roles (title, salary)
VALUES('Manager', 120000),
('Engineer', 160000),
('Marketer', 60000),
('HR Manager', 85000),
('HR Associate', 60000);

INSERT INTO Employee (first_name, last_name, role_id)
VALUES( 'Horatious', 'Harris', 2),
('Johnny', 'Appleseed', 3),
( 'Zacko', 'Moondou', 5);