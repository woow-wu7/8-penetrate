# RegExp 正则 - Regular Expression

- [tutorial](https://javascript.ruanyifeng.com/stdlib/regexp.html)
- regular expression 正则表达式
- regular: 是 经常的 定期的 常客 规则的 的意思
- expression: 表达 表示

### (1) 新建正则的两种方法

- 字面量方式: 以 ( 斜杠 ) 表示开始和结束
- RegExp 构造函数方式

```
字面量 var regex = /xyz/;
构造函数 var regex = new RegExp('xyz');

两者区别
1. 字面量 ---> 在引擎 ( 编译 ) 代码时，就会新建正则表达式 ---- 效率高
2. 构造函数 -> ( 运行 ) 时新建正则表达式 ------------------- 效率低
```

### (2) 实例属性

- 修饰符相关: 返回 boolean，表示是否设置对应的修饰符
  - i g m
  - ignoreCase 忽略大小写
  - global 全局匹配
  - multiline 多行匹配，加上 m 修饰符以后，^和$还会匹配行首和行尾，即^和$会识别换行符（\n）
- 和修饰符无关的属性
  - lastIndex
  - source

```
/abc/igm.test('ABC')
---

// true
// i 忽略大小写
// g 全局匹配
// m 多行匹配，加上m修饰符以后，^和$还会匹配行首和行尾，即^和$会识别换行符（\n）
```

### (3) 实例方法

- RegExp.prototype.test()
- RegExp.prototype.exec()

### (4) 匹配规则

- 字面量字符: 表示字面含义
- 元字符
  - . 点字符
  - ^ $ 位置字符
  - | 选择符
  - `?` `*` `+` 三个量词符
  - () 组匹配
  - [] 字符类
  - {} 重复类
  - \\
- 正则表达式中，需要反斜杠转义的，一共有 12 个字符：^、.、[、$、(、)、|、\*、+、?、{和\\
- 元字符不代表自身含义，如果需要 ( 匹配元字符 ) 就需要在它们前面加上 ( 反斜杠 )，表示 ( 转义 )
  - **( 字面量 ) 方式加 ( 一个反斜杠 )**
  - **( 构造函数 ) 方式加 ( 两个反斜杠 )**

```
元字符在转义时的不同表现
---

/1+1/.test('1+1')
// false，因为 量词符 + 要表示字面意思时，需要转义 ------------- 字面量方式时，需要 ( 一个 ) 反斜杠

/1\+1/.test('1+1')
// true


(new RegExp('1\+1')).test('1+1')
// false

(new RegExp('1\\+1')).test('1+1')
// true -------------------------------------------------- 当使用构造函数时，需要 ( 两个 ) 反斜杠
```

```
1
点字符 .
- 匹配除了 (回车符\r) （换行符\n） (行分隔符\u2028) (段分隔符\u2029) 以外的所有字符
  - 回车 enter
  - 换行 return

2
位置字符 ^ $
- ^ 开始位置
- $ 结束位置

3
选择符 |
- 表示 或 关系
- 比如 cat|dog 表示匹配 cat或dog，而不是 t或d

4
字符类 []
- 表示有一系列字符可供选择，只要匹配其中一个就可以了
- 比如 [xyz] 表示x、y、z之中任选一个匹配
- 特殊情况
  - （1）脱字符（^）
    - [^]: 则表示除了字符类之中的字符，其他字符都可以匹配
    - [^xyz]: 表示除了x、y、z之外都可以匹配
    - [^]: 就表示匹配一切字符，其中包括换行符
  - （2）连字符（-）
    - 对于连续序列的字符，连字符（-）用来提供简写形式，表示字符的连续范围，[abc]可以写成[a-c]
    - 注意:
      - 当连字号（dash）不出现在方括号之中，就不具备简写的作用，只代表字面的含义
      - [1-31]: 不代表1到31，只代表1到3
- 对比 [^] 和 .
  - . 不包括 \r \n \u2028 \u2029
  - [^] 匹配一切字符


5
重复类 {}
  - {n} 表示恰好重复n次
  - {n,} 表示至少重复n次
  - {n,m} 表示重复不少于n次，不多于m次

6
组匹配 ()
- 正则表达式的括号表示分组匹配，括号中的模式可以用来匹配分组的内容
- 注意点 使用组匹配时，不宜同时使用 g 修饰符，否则 match 方法不会捕获分组的内容
```

### (5) 预定义模式

```
\d 匹配0-9之间的任一数字，相当于[0-9]
\D 匹配所有0-9以外的字符，相当于[^0-9]
\w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]
\W 除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]
\s 匹配空格（包括换行符、制表符、空格符等），相等于[ \t\r\n\v\f]
\S 匹配非空格的字符，相当于[^ \t\r\n\v\f]
\b 匹配词的边界
\B 匹配非词边界，即在词的内部

digit 数字
word
space 空隙 空间
boundary 边界
```

### (6) 重复类

```
{n} 表示恰好重复n次
{n,} 表示至少重复n次
{n,m} 表示重复不少于n次，不多于m次
```

### (7) 量词符

```
? 问号表示某个模式出现0次或1次，等同于{0, 1}
* 星号表示某个模式出现0次或多次，等同于{0,}
+ 加号表示某个模式出现1次或多次，等同于{1,}
```

### (8) 贪婪模式

- 贪婪模式: 量词符，默认情况下都是 ( 最大可能匹配 )，即匹配直到下一个字符不满足匹配规则为止
- 非贪婪模式: 在 ( 量词符 ) 后面加上一个问号 ( ? )，则一旦条件满足，就不会再往下匹配，即最小匹配

```
1
贪婪模式
var s = 'aaa';
s.match(/a+/) // ["aaa"]


2
非贪婪模式
var s = 'aaa';
s.match(/a+?/) // ["a"]


3
*?：表示某个模式出现0次或多次，匹配时采用非贪婪模式
+?：表示某个模式出现1次或多次，匹配时采用非贪婪模式

注意:
- 量词符 ? 是没有贪婪模式的，因为它本身就表示了0个或者1个，是有限的，最大匹配是1
```

### (9) 组匹配

- 正则表达式的括号表示分组匹配，( 括号中的模式 ) 可以用来匹配 ( 分组 ) 的内容
- 注意点
  - **使用组匹配时，不宜同时使用 g 修饰符，否则 match 方法不会捕获分组的内容**

```
/fred+/.test('fredd') // true
/(fred)+/.test('fredfred') // true
---

第一个模式没有括号，结果+只表示重复字母d
第二个模式有括号，结果+就表示匹配fred这个词，即匹配这个组
```

```
使用组匹配时，不宜同时使用g修饰符，否则match方法不会捕获分组的内容
---

var m = 'abcabc'.match(/(.)b(.)/g);
m // ['abc', 'abc']
```

#### (9.1) 非捕获组

- (?:x)
  - 称为非捕获组（Non-capturing group）
  - 表示不返回该组匹配的内容，即匹配的结果中不计入这个括号

```
var m = 'abc'.match(/(?:.)b(.)/);
---

m // ["abc", "c"]
当使用 非捕获组(?:) 时，不返回该组匹配的内容，所以不会返回 "a"
```

#### (9.2) 先行断言

- x(?=y)
  - 称为先行断言（Positive look-ahead）
  - x 只有在 y 前面才匹配，y 不会被计入返回结果

```
var m = 'abc'.match(/b(?=c)/);
---

m // ["b"]
先行断言 b(?=c) 只有 b 在 c 前面时才匹配，c不会计入返回的结果
```

#### (9.3) 先行否定断言

- x(?!y)
  - 称为先行否定断言（Negative look-ahead）
  - x 只有不在 y 前面才匹配，y 不会被计入返回结果。

```
/\d+(?!\.)/.exec('3.14')
// ["14"]
```

### (10) 与正则有关的 - 字符串的实例方法

- String.prototype.match()
- String.prototype.search()
- String.prototype.replace()
- String.prototype.split()
- // "abc_de".search(/_/) =========> 3 
- // "abc_de_f".replace(/_/g, "-") = "abc_de_f".replaceAll(/_/g, "-") =  "abc_de_f".replace("_", "-") ===> "abc-de-f"