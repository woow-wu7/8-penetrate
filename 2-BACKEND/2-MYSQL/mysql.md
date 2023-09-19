# Mysql

### (1) 常用命令

```
1.
重启mysql
- systemctl restart mysqld
- 扩展:
  - 问题: 遇到问题，当我们输入 mysql -u root -p 并输入密码后报错
  - 报错: ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)
  - 分析: 出现 access denied 报错，有几种可能性
    - 1. mysql停止服务了，没有启动 ------- systemctl restart mysqld 重启即可
    - 2. root用户密码错误 --------------- (using password: YES) 表示密码错误

2.
链接数据库: mysql -u root -p
退出数据库: quit;
退出数据库(容器): exit

3.
查看所有数据库: show databases;
使用数据库: use xxx;
当前正在使用的数据库: select database();
查看当前数据库中的表: show tables;
创建数据库: create database xxx;
删除数据库: drop database xxx;

4.
向mysql的某个数据库中导入 ( .sql ) 文件
- source 数据库表的.sql文件路径
- // source F:\workSpace\coldchain.sql
```

### (2) docker 部署 mysql

- docker 安装 mysql 并访问 https://juejin.cn/post/6892390655126241287#heading-4
- docker 部署 mysql https://juejin.cn/post/6844904099024994312#heading-27
