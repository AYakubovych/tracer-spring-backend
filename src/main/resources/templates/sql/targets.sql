INSERT INTO target values (1,'ayakubovych@yahoo.com','Anton','eserarehe','575818360','Yakubovych');
INSERT INTO target values (2,'aaa@yahoo.com','Anastasia','eserarehe','575818360','Borovets');
INSERT INTO users values (1,'asd@asd.com',true,'Yakubovych',
'Anton','$2y$10$/pb4ZsOUfOzoKaVgdwtdF.XbWFbvZ0bDS7nDfjz97c8ORvWi93hc2');
INSERT INTO user_role values (1,1);
INSERT INTO user_target values (1,1);
INSERT INTO user_target values (1,2);

INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (1,1,'2020-01-01','10:00','50.0591','19.9789');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (2,1,'2020-01-02','11:00','41.890103','12.492512');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (3,1,'2020-01-02','12:00','51.500625','-0.124627');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (4,1,'2020-01-03','10:00','23.0591','19.9789');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (5,1,'2020-01-03','11:00','11.890103','12.492512');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (6,2,'2020-01-01','12:00','11.500625','-0.124627');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (7,2,'2020-01-02','12:00','41.500625','-0.124627');
INSERT INTO  locationdata (id, targetid, date, time, latitude, longitude)
values (8,2,'2020-01-02','13:00','31.500625','-0.124627');