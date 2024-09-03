# Java

# (1) Software Install

- [java-11](https://www.oracle.com/java/technologies/downloads/#java11-mac)
- [java-11-tutorial](https://javaziliao.com/post/931.html)
-
- [maven-official-website](https://maven.apache.org/download.cgi)
- [maven-config]()
-
-
- [idea](https://www.jetbrains.com/zh-cn/idea/download/?section=mac)

```
1
Verify whether the java 11 is installed.
$ java -version
```

# (2) A detailed tutorial about configuring JAVA 11 with IDEA.

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
