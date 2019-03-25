BEGIN;
DROP TABLE IF EXISTS users, consultant,posts CASCADE;


CREATE TABLE users(
    id SERIAL  PRIMARY KEY  ,
    user_name VARCHAR(60) NOT NULL,
    password TEXT NOT NULL

);
CREATE TABLE consultant(
    id SERIAL  PRIMARY KEY  ,
    full_name VARCHAR(60) NOT NULL,
    user_name VARCHAR(60) NOT NULL,
    password TEXT NOT NULL
);
CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    content TEXT,
    user_id INTEGER REFERENCES users(id),
    consultant_id INTEGER REFERENCES consultant(id),
    answer TEXT
);
INSERT INTO users(user_name,password) VALUES ('nour','1'),('deema','$2b$10$5fq177Zld4tUjsRV3ZPvjemWecm5v23652.HuputuI3Cs.nHARwcW'),('aseel','123');
INSERT INTO consultant(full_name,user_name,password) VALUES ('Dena Moeen','dena','111'),('Alaa Badra','alaa','222'),('Ayman Alquqa','ayman','333'),('Nareman Hellis','nareman','444');
INSERT INTO posts(title, content, user_id) values ('welcome', 'to my page fgfg', 2);
INSERT INTO users(user_name,password) VALUES ('nour','14511'),('deema','12111'),('aseel','12344');
INSERT INTO consultant(full_name,user_name,password) VALUES ('Dena Moeen','dena','11144'),('Alaa Badra','alaabadra','22255'),('Ayman Alquqa','ayman','33344'),('Nareman Hellis','nareman','44455');

INSERT INTO posts(title,content,answer) VALUES ('استشارة بالميراث','content my question','استشاراتك مجابة قبل ذلك');
-- INSERT INTO posts(title,content,answer) VALUES ('-----استشارة بالميراث','---اريد ان استشيركم بخصوص موضوع الميراث الذي حدث معي قبل فترة','استشاراتك مجابة قبل ذلك------------');

INSERT INTO posts(title, content, user_id) values ('welcome user', 'to my page user', 2);
INSERT INTO posts(title, content,answer, consultant_id) values ('welcome conultant', 'to my page consultant','my answer', 1);
INSERT INTO posts(title, consultant_id,id ) values ('welcome conultant', 4,5);





INSERT INTO consultant (user_name, full_name, password) VALUES 
('أيمن','أيمن القوقا', '$2b$10$.qwhTYf6cL.UZyqYRerjXu4PE2637sfAwhH/Vxz1thDBML.srvzRG');

COMMIT;