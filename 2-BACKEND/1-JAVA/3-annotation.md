##### Annotation 注解

##### (1) @RequestMapping

```
1
@RequestMapping(
  method = RequestMethod.POST,
  value = "/example{key}",
  params = "id=1"
  consumes = "application/json", // 指定控制器方法接受的请求内容类型。
  produces = { "application/json", "application/vnd.error+json" }, // 指定控制器方法返回的内容类型（MIME 类型）
  headers = "Content-Type=application/json",
)

// produces = { "application/json", "application/vnd.error+json" }
// -- application/json：标准的 JSON 格式。
// -- application/vnd.error+json：特定的 JSON 格式，通常用于错误响应。
```

##### ResponseEntity

```
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
