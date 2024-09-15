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
-
- 3. JPA
- @Entity
- @Table("music")
- @Id
- @GeneratedValue(strategy = GenerationType.IDENTITY)
- @Column(name = "name", nullable = false, unique = true, length = 512)
- JpaRepository.findAll()
- JpaRepository.findById(id)
- JpaRepository.findAllById(Arrays.asList(1L, 2L));
- JpaRepository.save(entity) // --------------------------- create / update
- JpaRepository.deleteById(id)
- JpaRepository.count()
- JpaRepository.countAll()
- repository.existsById(1L); // --------------------------- check whether is exist.

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

##### (2) JPA 常见注解 / 使用示例代码

##### 2.1 JPA / 常见注解

```java / JPA 常见注解
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

------- -------

5.
Some query methods that come with JPA.
自带的一些查询方法
- JpaRepository.findAll()
- JpaRepository.findById(id)
- JpaRepository.save(entity) // --------------------------- create / update
- JpaRepository.deleteById(id)
- JpaRepository.count()
- JpaRepository.countAll()
- JpaRepository.findAllById(Arrays.asList(1L, 2L));
- repository.existsById(1L); // --------------------------- check whether is exist.
```

##### 2.2 JPA / JPA 和 Swagger 示例 1

```java / JPA 和 Swagger 示例 1
package com.example.backreviewjava.controller;

import com.example.backreviewjava.jpa.entity.MusicJpaEntity;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/music-jpa-api")
@Tag(name = "Test jpa and swagger3", description = "Test jpa and swagger3")
public interface MusicJpaApi {

    // 1
    // getAllMusics
    @Operation(summary = "Get all musics", description = "Returns a list of all musics")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful", content = @Content(array = @ArraySchema(schema = @Schema(implementation = MusicJpaEntity.class)))),
            @ApiResponse(responseCode = "400", description = "Failed", content = @Content)
    })
    @RequestMapping(value = "/all-music", method = RequestMethod.GET)
    public List<MusicJpaEntity> getAllMusics();


    // 2
    // getMusicById
    @Operation(summary = "Get one music by id", description = "Returns a music")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful", content = @Content(schema = @Schema(implementation = MusicJpaEntity.class))),
            @ApiResponse(responseCode = "400", description = "Failed", content = @Content)
    })
    @RequestMapping(value = "/music/{id}", method = RequestMethod.GET)
    public MusicJpaEntity getMusicById(@PathVariable Integer id);

    // 3
    // addMusic
    @Operation(summary = "Add a music", description = "Add a music")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Music created successfully", content = @Content(schema = @Schema(implementation = MusicJpaEntity.class))),
            @ApiResponse(responseCode = "400", description = "Music created unsuccessfully", content = @Content)
    })
    @RequestMapping(value = "/music", method = RequestMethod.POST)
    public void addMusic(@RequestBody @Parameter(description = "music", required = true, schema = @Schema(implementation = MusicJpaEntity.class)) MusicJpaEntity music);

    // 4
    // edit
    @Operation(summary = "Edit a music", description = "Edit a music")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Music edited successfully", content = @Content(schema = @Schema(implementation = MusicJpaEntity.class))),
            @ApiResponse(responseCode = "400", description = "Music edited unsuccessfully", content = @Content)
    })
    @RequestMapping(value = "/music", method = RequestMethod.PUT)
    public  void editMusic(@RequestBody MusicJpaEntity music);

    // 5
    // delete
    @Operation(summary = "Delete a music", description = "Delete a music")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Music deleted successfully", content = @Content),
            @ApiResponse(responseCode = "404", description = "Music deleted unsuccessfully", content = @Content)
    })
    @RequestMapping(value = "/music/{id}", method = RequestMethod.DELETE)
    public void deleteMusic(@PathVariable Integer id);
}
```

##### 2.3 JPA / JPA 和 Swagger 示例 2

```java / JPA 和 Swagger 示例 2

package com.example.backreviewjava.service.impl;

import com.example.backreviewjava.jpa.repository.MusicJpaRepository;
import com.example.backreviewjava.jpa.entity.MusicJpaEntity;
import com.example.backreviewjava.service.MusicJpaService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class MusicJpaServiceImpl implements MusicJpaService {

    private final MusicJpaRepository musicJpaRepository;
    // @Resource
    @Autowired
    public MusicJpaServiceImpl(MusicJpaRepository musicJpaRepository) {
        this.musicJpaRepository = musicJpaRepository;
    }

    // 1
    // findAll()
    public List<MusicJpaEntity> getAllMusics() {
        log.warn("getAllMusic==========>MusicJpaServiceImpl/musicJpaRepository/findAll");
        return musicJpaRepository.findAll();
    }

    // 2
    // findById(id),get()
    public  MusicJpaEntity getMusicById(Integer id) {
        return musicJpaRepository.findById(id).get();
    }

    // 3
    // save() - add
    public void  addMusic(MusicJpaEntity music) {
        log.warn("addMusic{}", music);
        musicJpaRepository.save(music);
    }

    // 4
    // save() - edit
    public void editMusic(MusicJpaEntity music) {
        log.warn("editMusic{}", music);
        musicJpaRepository.save(music);
    }

    // 5
    // deleteById
    public void deleteMusic(Integer id) {
        log.warn("deleteMusic==========>MusicJpaServiceImpl/deleteMusic/id={}", id);
        musicJpaRepository.deleteById(id);
    }

}
```

##### ------- ------- ------- ------- ------- ------- -------

##### ------- ------- ------- ------- ------- ------- -------

##### (3) Swagger / 常见注解 / 示例

```java / Swagger 示例 1
package com.example.backreviewjava.controller;

import com.example.backreviewjava.jpa.entity.MusicJpaEntity;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/music-jpa-api")
@Tag(name = "Test jpa and swagger3", description = "Test jpa and swagger3")
public interface MusicJpaApi {

    // 1
    // getAllMusics
    @Operation(summary = "Get all musics", description = "Returns a list of all musics")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful", content = @Content(array = @ArraySchema(schema = @Schema(implementation = MusicJpaEntity.class)))),
            @ApiResponse(responseCode = "400", description = "Failed", content = @Content)
    })
    @RequestMapping(value = "/all-music", method = RequestMethod.GET)
    public List<MusicJpaEntity> getAllMusics();


    // 2
    // getMusicById
    @Operation(summary = "Get one music by id", description = "Returns a music")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful", content = @Content(schema = @Schema(implementation = MusicJpaEntity.class))),
            @ApiResponse(responseCode = "400", description = "Failed", content = @Content)
    })
    @RequestMapping(value = "/music/{id}", method = RequestMethod.GET)
    public MusicJpaEntity getMusicById(@PathVariable Integer id);

    // 3
    // addMusic
    @Operation(summary = "Add a music", description = "Add a music")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Music created successfully", content = @Content(schema = @Schema(implementation = MusicJpaEntity.class))),
            @ApiResponse(responseCode = "400", description = "Music created unsuccessfully", content = @Content)
    })
    @RequestMapping(value = "/music", method = RequestMethod.POST)
    public void addMusic(@RequestBody @Parameter(description = "music", required = true, schema = @Schema(implementation = MusicJpaEntity.class)) MusicJpaEntity music);

    // 4
    // edit
    @Operation(summary = "Edit a music", description = "Edit a music")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Music edited successfully", content = @Content(schema = @Schema(implementation = MusicJpaEntity.class))),
            @ApiResponse(responseCode = "400", description = "Music edited unsuccessfully", content = @Content)
    })
    @RequestMapping(value = "/music", method = RequestMethod.PUT)
    public  void editMusic(@RequestBody MusicJpaEntity music);

    // 5
    // delete
    @Operation(summary = "Delete a music", description = "Delete a music")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Music deleted successfully", content = @Content),
            @ApiResponse(responseCode = "404", description = "Music deleted unsuccessfully", content = @Content)
    })
    @RequestMapping(value = "/music/{id}", method = RequestMethod.DELETE)
    public void deleteMusic(@PathVariable Integer id);
}
```
