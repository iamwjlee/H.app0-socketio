
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


sqlite> insert into sales001 select * from sales; //�ȵ�
sqlite> SELECT * INTO sales002 FROM sales;  //�ȵ�
sqlite> create tables sales003 select * from sales;  //�ȵ�



�������̺� �ִ� ������ ���ο� ���̺� ����
sqlite> create table sales003 as select * from sales;  
���̺� ������ ����
sqlite> create table sales003 as select * from sales where 0=1;  
���̺� �� ��ü ������ ����
sqlite> delete from sales003;

���̺� ��ü�� ����
sqlite> drop table sales003;



create table sales as select * from sales_20220225 where 0=1; 




AOD(ATL OLEDB)