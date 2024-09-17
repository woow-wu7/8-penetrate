##### Annotation 注解 以及 各种知识点

- 1. SpringBoot
- @RequestMapping ---- Use '@RequestMapping' annotation preferentially because it can highlight the HTTP method. and it's similar to @RequestParam...
- @RequestParam
- @RequestBody
- @RequestHeader
- @PathVariable
- @RequestPart ------ 用于处理多部分表单数据，用在 multipart/form-data 表单提交请求的方法上，上传文件功能请看 【 4.2 Upload File 】
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
- // 同时也支持自定义查询，比如模糊查询
- // 详见: 本文件 / [ ##### 2.4 JPA / 模糊查询 fuzzy query ]
- // @Query("SELECT m FROM MusicJpaEntity m WHERE " + "m.name LIKE %:keyword% OR " + "m.singer LIKE %:keyword% OR " + "m.album LIKE %:keyword%")
- // List<MusicJpaEntity> searchByKeyword(@Param("keyword") String keyword);

##### (1) SpringBoot Annotation.

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

##### 2.4 JPA / 模糊查询 fuzzy query

```java / JPA 模糊查询 fuzzy query
package com.example.backreviewjava.jpa.repository;

import com.example.backreviewjava.jpa.entity.MusicJpaEntity;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface MusicJpaRepository extends JpaRepository<MusicJpaEntity, Integer> {

    // 自定义 JPQL 查询，对 name, singer 和 album 进行模糊查询
    // -- 第一个 m 是别名代表的实体
    // -- 第二个 m 是给 MusicJpaEntity 去了一个别名
    @Query("SELECT m FROM MusicJpaEntity m WHERE " +
            "m.name LIKE %:keyword% OR " +
            "m.singer LIKE %:keyword% OR " +
            "m.album LIKE %:keyword%")
    List<MusicJpaEntity> searchByKeyword(@Param("keyword") String keyword);
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

##### ------- ------- ------- ------- ------- ------- -------

##### ------- ------- ------- ------- ------- ------- -------

##### ------- ------- ------- ------- ------- ------- -------

##### (4) 【【 SpringBoot knowledge 】】

##### 4.1 Access Static Resource / SpringBoot knowledge

```
Position: application.yml
-

spring:
  # 2.3
  # Configure static resources.
  # 2.3.1
  # spring.web.resources.static-locations: classpath:/custom-static/,classpath:/public/,classpath:/resources/,classpath:/static/
  # -- this indicates the location of the directory for static resources.
  # -- ( custom-static/public/resources/static ) the all directories are static resources.
  # 2.3.2
  # spring.mvc.static-path-pattern: /resources/**
  # -- this indicates the request path to access the static resource.
  # -- http://localhost:9999/resources/logo.png can access the static image.
  # English
  # -- configure 配置 v
  # -- configuration 配置 n
```

##### 4.2 Upload File

- [tutorial-link/controller](https://github.com/woow-wu7/5-back-review-java/blob/main/src/main/java/com/example/backreviewjava/controller/impl/FileUploadApiController.java)
- - [tutorial-link/html](https://github.com/woow-wu7/5-back-review-java/blob/main/src/main/resources/templates/fileUpload.html)

```java 1 Config / Upload File
1
maven
-
<!-- spring-boot-starter-thymeleaf -->
<!-- 主要用于显示resources/templates中的html -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>



2
pom.xml
-
spring
  # 2.6
  # spring-boot-starter-thymeleaf
  # 主要用于显示resources/templates中的html
  thymeleaf:
    cache: false
    mode: HTML
```

```java Complete


3
resources/templates/fileUpload.html
-
<!DOCTYPE html>
<!--注意：xmls:th 的值-->
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div>测试页面</div>
<!-- th:action="@{/upload}" 提交的controller对应的path，即和controller的请求路径对应 -->
<!-- enctype="multipart/form-data" -->
<form th:action="@{/upload-api/by-template}" method="post" enctype="multipart/form-data">
    <div>
        <span>单头像上传</span>
        <input type="file" name="single">
    </div>
    <div>
        <!-- name=multiple 表示开启多个上传 -->
        <span>多头像上传</span>
        <input type="file" name="multiple" multiple>
    </div>
    <button type="submit">上传</button>
</form>
</body>
</html>




4
controller
-
package com.example.backreviewjava.controller.impl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
// 1
// Pay attention
// -- make sure to use '@Controller' to instead of the '@RestController' when implementing upload function.
// -- @Controller
// 2
// Detailed Process
// -- 1. FileUploadApiController
// ------ We should return the 'fileUpload' html template through the handleFile function firstly.
// ------ ( http://localhost:9999/upload-api/getTemplate )
// -- 2. resources/templates/fileUpload.html
// ------ The 'th:action="@{/upload-api/by-template}"' attribute in form tag should math the 'uploadFileByTemplate' function.
// -- 3.
@Controller
@Slf4j
@RequestMapping("/upload-api")
public class FileUploadApiController {
    // 1
    @RequestMapping(value = "/getTemplate", method = RequestMethod.GET)
    public String handleFile(
    ) {
        // 1. 这里返回的是 resources/templates/fileUpload.html
        // 2. 需要安装 spring-boot-starter-thymeleaf 这个maven依赖
        // 3. -- 所以我们启动项目后，需要首先访问 http://localhost:9999/upload-api/getTemplate 来打开文件上传页面
        // 3. -- 然后提交表单，提交的路径是 'th:action="@{/upload-api/by-template}"' 对应 "/upload-api/by-template" 这个路径的方法 uploadFileByTemplate
        return "fileUpload";
    }
    // 2
    // 注意: "/upload-api/by-template" 需要和 fileUpload.html 中的 'th:action="@{/upload-api/by-template}"' 匹配
    @RequestMapping(value = "/by-template", method = RequestMethod.POST)
    public String uploadFileByTemplate(
            @RequestPart("single") MultipartFile single,
            @RequestPart("multiple") MultipartFile[] multiple
    ) throws IOException {
        log.warn("上传的单文件{}", single);
        log.warn("上传的多文件{}", multiple);
        if (!single.isEmpty()) {
            // originalFilename: 获取原始文件名
            // transferTo: 保存到 ( Users/xiawu/work/personal... ) 文件夹
            String originalFilename = single.getOriginalFilename();
            log.warn("上传单文件文件名是:{}", originalFilename);
            single.transferTo(new File("/Users/xiawu/work/personal/back-end/back-review-java/src/main/resources/templates/files" + originalFilename));
        }
        if (multiple.length > 0) {
            for (MultipartFile file : multiple) { // for循环
                if (!file.isEmpty()) {
                    String originalFilename = file.getOriginalFilename(); // 原始文件名
                    long size = file.getSize()/1024; // 文件大小，默认但是为字节，1MB = 1024KB = 1024 * 1024 byte
                    log.info("文件名{}. 大小{}KB", originalFilename, size);
                    file.transferTo(new File("/Users/xiawu/work/personal/back-end/back-review-java/src/main/resources/templates/files" + originalFilename));
                }
            }
        }
        return "fileUpload"; // 返回 fileUpload.html
    }
    // (3)
    // 前后端分离的接口
    // 注意点
    // 1. consumes 一定要设置成 "multipart/form-data" 因为前端 antd 中的 Upload 组件是用的 form-data 方式在上传
    // 2. 前端上传时 Upload 组件一定要设置 name 属性，因为 name 的值是和这里的 @RequestPart("前端name属性的值") 一一对应
    // 3. consume 是消费的意思
    @RequestMapping(value = "/byfronten", consumes = "multipart/form-data", method = RequestMethod.POST)
    @ResponseBody // 因为用的是 @controler，因为要返回html，而这里我们需要返回前后端分离后的数据，所以加上 @ResponseBody
    public String frontendUpload(
            // @RequestParam("file") MultipartFile avatars
            @RequestPart("file") MultipartFile avatars
    ) {
        System.out.println(avatars);
        return "上传成功";
    }
}
```
