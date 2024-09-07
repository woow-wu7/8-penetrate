##### Mavens Dependencies

##### (1) Swagger / specification 3 / swagger3 / oOpenAPI 3

- [swapper-official-website](https://swagger.io/docs/specification/about/)
- [各注解说明地址](https://editor.swagger.io/?_gl=1*1zyvee*_gcl_au*NjM3NDU4MDczLjE3MjU2ODMwNDE.)

```java swagger install and configuration 123
1
add maven
 <dependency>
  <groupId>org.springdoc</groupId>
  <artifactId>springdoc-openapi-ui</artifactId>
  <version>1.6.10</version> <!-- 确认使用最新的稳定版本 -->
</dependency>


2
add configuration
@Configuration
public class SwaggerConfig {
  @Bean
  public GroupedOpenApi publicApi() {
    return GroupedOpenApi.builder()
            .group("music-api")
            .pathsToMatch("/music-api/**") // 设置路径匹配规则，表示将 music-api 这个路径的API进行归组
            .build();
  }
}

3
access address
// http://localhost:xxxx/swagger-ui/index.html
```

```java some annotations 4
4
一些注解

// 1
// @RequestMapping 可以映射任何 HTTP 方法（GET、POST、PUT、DELETE 等）。
// @GetMapping 专门用于映射 HTTP GET 请求。

// 2
// parameters
// - path parameters
// - query parameters
// - request header parameters

// 3
/**
 * @Controller 可以返回html页面
 * @RestController 不能返回html页面，返回的内容就是return的内容
 * 1. @RestController = @Controller + @ResponseBody
 * 2. 如果一个controller，一些页面要返回html，一些又要返回return的内容，就需要用 @Controller注解controller返回html，然后在要返回的return的方法上加上@ResponseBody来返回return后面的内容
 */

// 4
// swagger3 annotation
// - @Tag(mame, description)
// - @Operation(summary, description)
// -
// - @ApiResponses(value)
// - @ApiResponse(responseCode, description) // @Content @Schema @ArraySchema
// -
// - @Parameter
// - @RequestBody 这个注解在 SpringBoot 中也存存，用来说明 post 请求的body 参数

// 5
// Spring boot
// - @RequestBody
// - @PathVariable

```

```java swagger3 examples 5
5
examples

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@Tag(name = "User Management", description = "Operations for managing users")
public class UserController {

    private List<User> users = new ArrayList<>();

    @GetMapping
    @Operation(summary = "List all users", description = "Returns a list of all users")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful operation",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = User.class))))
    })
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{userId}")
    @Operation(summary = "Get user by ID", description = "Returns a single user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful operation",
                    content = @Content(schema = @Schema(implementation = User.class))),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)
    })
    public ResponseEntity<User> getUserById(@PathVariable @Parameter(description = "ID of user to return") String userId) {
        return users.stream()
                .filter(user -> user.getId().equals(userId))
                .findFirst()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @Operation(summary = "Create a new user", description = "Creates a new user with given details")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "User created",
                    content = @Content(schema = @Schema(implementation = User.class))),
            @ApiResponse(responseCode = "400", description = "Invalid input",
                    content = @Content)
    })
    public ResponseEntity<User> createUser(@RequestBody @RequestBody @Parameter(description = "User details") User user) {
        users.add(user);
        return ResponseEntity.status(201).body(user);
    }

    @PutMapping("/{userId}")
    @Operation(summary = "Update an existing user", description = "Updates an existing user with given details")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User updated",
                    content = @Content(schema = @Schema(implementation = User.class))),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)
    })
    public ResponseEntity<User> updateUser(@PathVariable @Parameter(description = "ID of user to update") String userId,
                                           @RequestBody @RequestBody @Parameter(description = "Updated user details") User updatedUser) {
        return users.stream()
                .filter(user -> user.getId().equals(userId))
                .peek(user -> {
                    user.setName(updatedUser.getName());
                    user.setEmail(updatedUser.getEmail());
                })
                .findFirst()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{userId}")
    @Operation(summary = "Delete a user by ID", description = "Deletes a user with the given ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "User deleted",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)
    })
    public ResponseEntity<Void> deleteUser(@PathVariable @Parameter(description = "ID of user to delete") String userId) {
        boolean removed = users.removeIf(user -> user.getId().equals(userId));
        if (removed) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
```
