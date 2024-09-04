##### IDEA

##### (1) Software Install

- [java-11](https://www.oracle.com/java/technologies/downloads/#java11-mac)
- [java-11-tutorial](https://javaziliao.com/post/931.html)
-
- [maven-official-website](https://maven.apache.org/download.cgi)
- [maven-config](https://juejin.cn/post/6927306093970325517#heading-8)
- [maven-install-tutorial](https://developer.aliyun.com/article/1148476)
-
- [idea](https://www.jetbrains.com/zh-cn/idea/download/?section=mac)

```
1
Verify whether the java 11 is installed.
$ java -version
```

##### (2) Maven Download and Setting

- [maven-official-website](https://maven.apache.org/download.cgi)
- [maven-config](https://juejin.cn/post/6927306093970325517#heading-8)
- [maven-install-tutorial](https://developer.aliyun.com/article/1148476)

```
1
download maven
- https://maven.apache.org/download.cgi




2
decompress and change
- 下载解压后需要配置maven，即修改 D:\javaconfig\apache-maven-3.6.3\conf\setings.xml 文件
- 注意：是修改这个文件 apache-maven-3.6.3\conf\setings.xml
- 需要修改三个地方

1 <localRepository></localRepository>
  - 本地仓库，设置为自己本地的文件夹中，这样本地有jar包时就不用每次去下载
  - maven项目创建好后，需要jar包，先从本地仓库找，没找到再去中央仓库或私服中去下载
2 <mirrors><mirror></mirror></mirrors>
  - 镜像
  - 配置国内镜像，加快下载速度
3 <profiles><profile></profile></profiles>
  - 让maven指定jdk1.8来进行编译

- 具体配置如下

<localRepository>
  /Users/xiawu/work/plugins/maven-local-repository
</localRepository>

<mirrors>
  <mirror>
    <id>alimaven</id>
    <name>aliyun maven</name>
    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    <mirrorOf>central</mirrorOf>
  </mirror>
</mirrors>

在settings.xml文件中，可以通过设置maven-compiler-plugin插件的版本来指定编译目标版本为Java 11。这通常是在<profiles>部分添加一个新的profile来实现的：
<profiles>
  <profile>
    <id>java-11</id>
    <properties>
      <maven.compiler.source>11</maven.compiler.source>
      <maven.compiler.target>11</maven.compiler.target>
      <maven.compiler.compilerVersion>11</maven.compiler.compilerVersion>
    </properties>
  </profile>
</profiles>
然后，在<activeProfiles>标签内激活这个profile：
<activeProfiles>
  <activeProfile>java-11</activeProfile>
</activeProfiles>




3
config environment variables
- 1. vi ~/.bash_profile
- 2. add the following code in the '.bash_profile' file:
export MAVEN_HOME=/Users/xiawu/work/plugins/apache-maven-3.9.9
export PATH=$PATH:$MAVEN_HOME/bin


4
refresh the config
$ source ~/.bash_profile


5
input the command to verify whether the maven is installed successfully.
$ mvn -v


6
if the step 5 is successful, go next to config idea
- setting -> Build Execution Deployment -> Build Tools -> Maven
- 1. Maven home path: /Users/xiawu/work/plugins/apache-maven-3.9.9
- 2. User setting file: /Users/xiawu/work/plugins/apache-maven-3.9.9/conf/settings.xml
```

##### (3) A detailed tutorial about configuring JAVA 11 with IDEA.

```
步骤1: 下载并安装IntelliJ IDEA
访问官方网站(https://www.jetbrains.com/idea/)下载最新版本的IntelliJ IDEA。
根据您的操作系统选择合适的安装程序。
运行安装程序,按照向导步骤完成安装。

步骤2: 安装Java
确保您的系统上已安装Java Development Kit(JDK)。
如果尚未安装,请从Oracle官网(http://www.oracle.com/java/technologies/javase-jdk11-downloads.html)下载并安装Java 11或更高版本。

步骤3: 配置IntelliJ IDEA
启动IntelliJ IDEA。
点击"File"菜单,选择"Project Structure"(或按快捷键 Ctrl+Alt+S)。
在弹出的对话框中,点击"Project"选项卡。
在"Project SDK"下拉菜单中,确保已选择正确的Java版本(例如"Java 11")。
如果所需的Java版本不在列表中,点击"New..."按钮,浏览到Java安装目录选择所需版本。
设置"Project language level"为与Java版本匹配的语言级别(例如"11"对应Java 11)。
点击"Apply",然后再次点击"OK"确认设置。

步骤4: 创建新Java项目
点击"File"菜单,选择"New" > "Project"。
在左侧选择"Java",右侧选择"Java SDK 11"作为项目SDK(根据实际情况调整版本号)。
选择所需的项目模板和设置。
点击"Next"继续配置项目详情。
完成所有设置后,点击"Finish"创建项目。

步骤5: 验证Java设置
打开刚创建的Java项目。
创建新的Java类或打开现有类。
在代码编辑器中,您现在可以开始使用Java 11的特性。

步骤6: 配置编译器设置
点击"File"菜单,选择"Settings"(Windows/Linux)或"IntelliJ IDEA" > "Preferences"(macOS)。
在搜索栏中输入"Compiler"。
在"Java Compiler"部分,确保"Target bytecode version"设置为与您的Java版本匹配(例如"11"对应Java 11)。

步骤7: 运行和调试
您可以像其他Java代码一样运行和调试Java 11代码。
创建运行/调试配置时,确保选择"JRE"为"Use project JDK (Java 11)"。
通过这些步骤,您应该能够在IntelliJ IDEA中成功设置和使用Java 11。这个过程允许您利用最新的Java功能和改进,在您的项目中充分发挥Java 11的优势。
```

##### (4) IDEA Plugins

- [tutorial](https://cloud.tencent.com/developer/article/2433153)

```
Java代码格式规范：CheckStyle
自动生成序列图插件：SequenceDiagram
快捷键提示工具：Key promoter X
代码注解插件： Lombok
代码生成工具：CodeMaker
代码质量检查工具：SonarLint
单元测试测试生成工具：JUnitGenerator
Mybatis 工具：Free Mybatis plugin
JSON转领域对象工具：GsonFormat
字符串工具：String Manipulation
Redis可视化：Iedis
K8s工具：Kubernetes
彩虹颜色括号：Rainbow Brackets
阿里代码规约检测：Alibaba Java Coding Guidelines
```

##### (5) IDEA don't have java 11 options

- [tutorial](https://blog.csdn.net/zhangfuping123456789/article/details/138729360)

```
1
新建时，在 spring boot 面板上的 【 Server URL 】换成阿里云的地址 【 https://start.aliyun.com 】
```

##### (6) IDEA shortcut keys

```
ctrl+p 方法参数提示
ctrl+alt+l 代码格式化
ctrol+alt+o 删除没有使用到的引入的文件或依赖
sout System.out.println()
```
