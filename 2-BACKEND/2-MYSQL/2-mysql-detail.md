## Mysql

```
constraint 约束 n
character 性格 特征
reference 引用v 参考n
engine 引擎 发动机
collate 核对 校对 v
alias 别名 n
restrict 约束 v
// strict严格的 VS restrict约束 VS district 区域地区

primary key: 主键 -一个表 只能有一个 主键，并且 ( 主键 ) 不能有 ( 重复值 ) 和 ( NULL )
key: 索引
```

## (一) TABLE

```sql
1
CREATE TABLE `music` (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '歌名',
  `album` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '相册',
  `date` datetime DEFAULT NULL COMMENT '日期',
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `singer_id` int DEFAULT NULL COMMENT '歌手ID',
  PRIMARY KEY (`id`), ####### ------------------------- 主键
  KEY `SINGER_ID` (`singer_id`), ####### -------------- 索引
  CONSTRAINT `SINGER_ID` FOREIGN KEY (`singer_id`) REFERENCES `singer` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT ####### -- 外键约束
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

2
```

## (二) VIEW

```sql
CREATE VIEW SingerMusicDetails AS
SELECT
    S.id AS singerID,
    S.name AS singerName,
    S.age,
    S.gender,
    M.id AS musicID,
    M.name AS musicName,
    M.album,
    M.date
FROM
    singer S
INNER JOIN  ####### ------ SQL的关键字: 将两个表连接在一起 -- 注意: INNER JOIN 和 JOIN 等价
    music M
ON ####### --------------- SQL的关键字: 用于指定连接条件，连接条件定义了两个表中的哪些行应该被连接在一起
    S.id = M.singer_id;
```
