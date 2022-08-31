
sqlite3 chinook
.help
.quit
.database
.tables

sqlite> .mode column
sqlite> .header on

sqlite> select * from sales;


sqlite> create table  users (id text, passwd text);
sqlite> insert into users values('wj','/mdf56rugwtv7Qm2TgNPhNy9rrQp2czNTruQ4Vr43XE=');
sqlite> insert into users values('a',4);
sqlite> .mode column
sqlite> .header on
sqlite> select * from users;
sqlite> update users  set age=101 where name="w";
sqlite> select * from users;

sqlite> drop table users;


sqlite> insert into sales001 select * from sales; //안돼
sqlite> SELECT * INTO sales002 FROM sales;  //안돼
sqlite> create tables sales003 select * from sales;  //안돼



기존테이블에 있는 내용을 새로운 테이블에 복사
sqlite> create table sales003 as select * from sales;  
테이블 구조만 복사
sqlite> create table sales003 as select * from sales where 0=1;  
테이블 내 전체 데이터 삭제
sqlite> delete from sales003;

테이블 자체를 삭제
sqlite> drop table sales003;



create table sales as select * from sales_20220225 where 0=1; 




AOD(ATL OLEDB)