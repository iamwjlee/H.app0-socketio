#myNode
> npm init -y
> npm i socket.io express --save
> npm i sqlite3 --save
```
 node app.js : Listening on 1705
```


#sqlite3
```
 table create : create table station01 (id integer primary key,name text, adj integer );
 show all tables : select name from sqlite_master where type='table';
 inquiry : select * from setup;  

 create table setup2(ip text,van integer,time DEFAULT(datetime('now','localtime')) );
 insert into setup2 values("192.168.0.101",1,datetime('now','localtime'));
 select * from adj where code=100;
 delete from adj where code=0 and pumpId=0;

 2020-01-14
 create table odt( odtId text,cost text,literLimit text);
 .schema odt
 insert into odt values('3','1000','90',0);

 select * from odt;

 .header on
 .mode column

 update odt set cost='1001' where odtId='3';

 delete from odt where cost='1000';

 2020-01-18
 create table sales(odtId text,date text,carNumber text,liter text,cost text,amount text, class text);
 drop table sales;  //table delete

 drop table odt;
 create table odt( odtId text,cost text,literLimit text,dTotal int);
 insert into odt values('3','1000','90',0);


```