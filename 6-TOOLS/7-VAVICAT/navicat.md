##### (1) Navicat / Download and Install

```
1. Download and Install
- 1. Baidu online disk: 1-MAC/1-Navicat Premium 16.0.6汉化版.dmg
- 2. Installation tutorial: https://www.qinchao.site/kaifagongju/24.html
- 3. 先安装navicat, 弹窗报错时，再右键点击 ( 已破损修复 ) 弹出 terminal.
```

##### (1) Mysql / Download and Install

- [jump](file:///Users/xiawu/work/personal/frontend/8-penetrate/2-BACKEND/2-MYSQL/mysql.md)
- [official-website](https://www.mysql.com/downloads/)
- [tutorial](https://blog.csdn.net/liaowenxiong/article/details/131465103)

```
1
click the link at the bottom of the page to download
- 1. MySQL Community (GPL) Downloads »
- 2. MySQL Community Server
- 3. Select the version of MySQL
- 4. macOS 14 (ARM, 64-bit), DMG Archive


2
After installing, then to config.
- cd /etc/paths.d
- vim .bash_profile


3
add the following contents.
- export PATH=$PATH:/usr/local/mysql/bin
- export PATH=$PATH:/usr/local/mysql/support-files


4
run the following command
- source ./.bash_profile


5
test
- mysql --version
```

##### (2) Mysql / 常用命令

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

##### (3) Docker / 部署 mysql

- docker 安装 mysql 并访问 https://juejin.cn/post/6892390655126241287#heading-4
- docker 部署 mysql https://juejin.cn/post/6844904099024994312#heading-27
