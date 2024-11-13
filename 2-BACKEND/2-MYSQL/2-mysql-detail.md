## Mysql

```
constraint 约束 n
character 性格 特征
reference 引用v 参考n
engine 引擎 发动机
collate 核对 校对 v
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
  PRIMARY KEY (`id`), # 主键
  KEY `SINGER_ID` (`singer_id`), # 索引
  CONSTRAINT `SINGER_ID` FOREIGN KEY (`singer_id`) REFERENCES `singer` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT # 外键约束
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

2
```

## (二) VIEW

```sql
CREATE VIEW SingerMusicDetails AS
SELECT
    S.SingerID,
    S.Name AS SingerName,
    S.Age,
    M.MusicID,
    M.Name AS MusicName
FROM
    Singers S
INNER JOIN
    Music M
ON
    S.SingerID = M.SingerID;
```
