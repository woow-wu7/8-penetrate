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
