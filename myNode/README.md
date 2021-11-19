#myNode
> npm init -y
> npm i socket.io express --save
> npm i sqlite3 --save

#sqlite3
```
 table create : create table station01 (id integer primary key,name text, adj integer );
 show all tables : select name from sqlite_master where type='table';
 inquiry : select * from setup;  

 create table setup2(ip text,van integer,time DEFAULT(datetime('now','localtime')) );
 insert into setup2 values("192.168.0.101",1,datetime('now','localtime'));
 select * from adj where code=100;
```