INSERT INTO User (id, firstname, lastname, username, password, salary, age) VALUES (1, 'Alex','Knr', 'alex123','$2a$04$4vwa/ugGbBVDvbWaKUVZBuJbjyQyj6tqntjSmG8q.hi97.xSdhj/2', 3456, 33, );
INSERT INTO User (id, firstname, lastname, username, password, salary, age)  VALUES (2, 'Tom', 'Asr', 'tom234', '$2a$04$QED4arFwM1AtQWkR3JkQx.hXxeAk/G45NiRd3Q4ElgZdzGYCYKZOW', 7823, 23, );
INSERT INTO User (id, firstname, lastname, username, password, salary, age)  VALUES (3, 'Adam', 'Psr', 'adam', '$2a$04$WeT1SvJaGjmvQj34QG8VgO9qdXecKOYKEDZtCPeeIBSTxxEhazNla', 4234, 45, );

INSERT INTO Offer (id, name, address,area, price) VALUES (-1,'Dom w goździkowcach', 'Aleksandrów Łódzki', '169', '480 000');
INSERT INTO Offer (id, name, address,area, price) VALUES (-2,'Dom w malinówkach', 'Zgierz', '110', '320 000');
INSERT INTO Offer (id, name, address,area, price) VALUES (-3,'Dom w różach', 'Ozorków', '250', '620 000');
INSERT INTO Offer (id, name, address,area, price) VALUES (-4,'Dom parterowy', 'Pabianice', '70', '230 000');
INSERT INTO Offer (id, name, address,area, price) VALUES (-5,'Dom w marmurze', 'Konstatynów Łódzki', '480', '1 220 000');
INSERT INTO Offer (id, name, address,area, price) VALUES (-6,'Dom zielistkach', 'Grunwald', '100', '300 000');

INSERT INTO Role (id, role) VALUES (1, 'ROLE_ADMIN');
INSERT INTO Role (id, role) VALUES (2, 'ROLE_USER');

INSERT INTO user_roles (User_id, roles_id) VALUES (1,1);
INSERT INTO user_roles (User_id, roles_id) VALUES (2,2);
INSERT INTO user_roles (User_id, roles_id) VALUES (3,2);