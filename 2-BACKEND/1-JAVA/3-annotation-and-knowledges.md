##### Annotation 注解 以及 各种知识点

- 1. SpringBoot
- @RequestMapping ---- Use this '@RequestMapping' annotation preferentially because it can highlight the HTTP method. and it's similar to @RequestParam...
- @RequestParam
- @RequestBody
- @RequestHeader
- @PathVariable
- @RequestPart ------ 用于处理多部分表单数据
-
- 2. Swagger
- @Tag(name, description)
- @Operation(summary, description)
- @ApiResponses(value)
- @ApiResponse(responseCode, description) @Content @Schema @ArraySchema
- @Parameter
- @RequestBody 这个注解在 SpringBoot 中也存存，用来说明 post 请求的 body 参数

##### (1) SpringBoot

##### 1.1 @RequestMapping

- _Please use this '@RequestMapping' annotation preferentially because it can highlight the HTTP method. and it's similar to @RequestParam..._

```java / RequestMapping
1
@RequestMapping(
  method = RequestMethod.POST,
  value = "/example{key}",
  params = "id=1"
  headers = "Content-Type=application/json",
  consumes = "application/json", // 指定控制器方法接受的请求内容类型。
  produces = { "application/json", "application/vnd.error+json" }, // 指定控制器方法返回的内容类型（MIME 类型）
)

// produces = { "application/json", "application/vnd.error+json" }
// -- application/json：标准的 JSON 格式。
// -- application/vnd.error+json：特定的 JSON 格式，通常用于错误响应。
```

##### 1.2 ResponseEntity

```java ResponseEntity
ResponseEntity 的作用

// - 1. 状态码控制/status：你可以指定HTTP状态码，例如200（OK）、201（Created）、404（Not Found）等
// - 2. 头部信息控制/header：你可以添加自定义的HTTP头部信息
// - 3. 响应体控制/body：你可以指定响应体的内容
ResponseEntity.status(HttpStatus.OK).headers(headers).body("Response with custom header");
// ResponseEntity.status(HttpStatus.OK).headers(headers).body("Response with custom header");
// ResponseEntity.ok().headers(headers).body("Response with custom header"); // .ok = .status(HttpStatus.OK).
// ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to get value"); // 500
// ResponseEntity.status(HttpStatus.OK).body(value); // 200
```

##### 1.3 final keyword

```java final
final
- The 'final' keyword indicates the data is a constant.
- 表示一个 常量，不能被修改
--

private final MusicJpaService musicJpaService;

@Autowired
public MusicJpaApiController(MusicJpaService musicJpaService) {
  this.musicJpaService = musicJpaService;
}
```

##### ------- ------- ------- ------- ------- ------- -------

##### ------- ------- ------- ------- ------- ------- -------

##### (2) JPA 常见注解

```java JPA 常见注解
JPA

1. @Entity
2. @Table("music")

3. @Id
3. @GeneratedValue(strategy = GenerationType.IDENTITY)

4. @Column(name = "name", nullable = false, unique = true, length = 512)
// name: The 'name' represents the field that is mapped to the database.
// nullable: The 'nullable=false' means that the 'name' is not null.
// unique: The 'unique=true' field means this field is unique in the database.
// length: The 'length=512' field means the max length of this field is 512.
TIPS: the 'music_name' field correspond to the 'name' field in the database.
-- map: 地图n 映射v
-- correspond: 对应 相当于 类似于
-- 【 correspond to. 和...相对应 】
```

##### ------- ------- ------- ------- ------- ------- -------

##### ------- ------- ------- ------- ------- ------- -------

##### (3) Swagger 常见注解

```

```
