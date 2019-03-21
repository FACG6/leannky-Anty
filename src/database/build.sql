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
INSERT INTO users(user_name,password) VALUES ('nour','14511'),('deema','12111'),('aseel','12344');
INSERT INTO consultant(full_name,user_name,password) VALUES ('Dena Moeen','dena','11144'),('Alaa Badra','alaabadra','22255'),('Ayman Alquqa','ayman','33344'),('Nareman Hellis','nareman','44455');

INSERT INTO posts(title,content,answer) VALUES ('استشارة بالميراث','اريد ان استشيركم بخصوص موضوع الميراث الذي حدث معي قبل فترة','استشاراتك مجابة قبل ذلك');
INSERT INTO posts(title,content,answer) VALUES ('-----استشارة بالميراث','---اريد ان استشيركم بخصوص موضوع الميراث الذي حدث معي قبل فترة','استشاراتك مجابة قبل ذلك------------');

INSERT INTO posts(title, content, user_id) values ('welcome', 'to my page fgfg', 2);





COMMIT;