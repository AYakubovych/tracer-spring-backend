INSERT into roles values (1,'ROLE_USER');
INSERT into roles values (2,'ROLE_ADMIN');

INSERT INTO target (id,email,name,pass,phone,surname)
values (100,'ayakubovych@yahoo.com','Anton','eserarehe','575818360','Yakubovych');

INSERT INTO target (id,email,name,pass,phone,surname)
 values (101,'aaa@yahoo.com','Anastasia','eserarehe','575818360','Borovets');

INSERT INTO users values (100,'asd@asd.com',true,'Yakubovych',
'Anton','$2y$10$/pb4ZsOUfOzoKaVgdwtdF.XbWFbvZ0bDS7nDfjz97c8ORvWi93hc2');

INSERT INTO user_role values (100,1);
INSERT INTO user_target values (100,101);
INSERT INTO user_target values (100,100);

INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (1,100,'2020-01-01','10:00','50.0591','19.9789');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (2,100,'2020-01-02','11:00','41.890103','12.492512');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (3,100,'2020-01-02','12:00','51.500625','-0.124627');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (4,100,'2020-01-03','10:00','23.0591','19.9789');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (5,100,'2020-01-03','11:00','11.890103','12.492512');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (6,101,'2020-01-01','12:00','11.500625','-0.124627');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (7,101,'2020-01-02','12:00','41.500625','-0.124627');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (8,101,'2020-01-02','13:00','31.500625','-0.124627');