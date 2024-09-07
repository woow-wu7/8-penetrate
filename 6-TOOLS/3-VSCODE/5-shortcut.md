# Vscode

##### (一) 快捷键 Shortcut key

- [shortcut key](https://zhuanlan.zhihu.com/p/143979670)

```
快捷键设置: command+k / command+s
主题设置: command+k / command+t
设置: command + ,

查找: command + f
查找后下一个: command + g
查找后上一个: command + shift + g

展开/收缩左侧菜单: command + b
// 提示: 当光标在代码中时，比如在md中，command+b是强调加黑的效果
// 所以: 我们需要用 command+shift+e，先选中左侧菜单，在 command+b 显示隐藏

展开折叠代码: command+k + command+0   /   command+k + command+j
展开折叠一个函数的所有代码: command+k + command+]  /   command+k + command+[
展开折叠单签位置代码: command+option+[   / command+option+]


--


breadcrumb 面包屑相关快捷键
快捷键设置:  command +k  / command + s 调出快捷键，然后搜索 breadcrumb

command + shift + p 显示命令
command + shift + o 文件内快速定位

command + shift + n 新建窗口 ( n 是 new 的意思 )
command + shift + w 关闭窗口
command + shift + L 选中所有相同的单词(改建成了console)
command + shift + \ 在括号之间跳转，包括(){}

command + shift + e
command + shift + f
command + shift + x
control + shift + g -> git菜单


control + j 排列成一行
control + g 搜索行

( a -> b ) 返回上一个光标位置：control + -
( b -> a ) 撤销上一个光标操作：Command + U

command + . 更多操作
同时选择上一行 (Ctrl + Alt + Up) 或者下一行 (Ctrl + Alt + Down) 的相同位置：

查找：command + f
替换：command + option + f

添加书签：command + option + k
查找下一个书签: command + option + L

折叠代码块：command + option + {
自动唤醒灯泡: ⌘。

插入多行光标: Command + Option + 方向键上/下

设置快捷键 (  Command + k ) + ( Command + s )
删除每一行行尾的空格 ( Command + k ) + ( Command + x )
折叠所有代码 ( Command + k ) + ( Command + 0 )
展开所有代码 ( Command + k ) + ( Command + j )
折叠当前部分代码块 ( Command + option + [ )
展开当前部分代码块 ( Command + option + ] )

command + o 打开文件夹
command + 0 高亮当前文件的树形菜单 - 注意这里是零，不是o

command + , 设置
option + shift + a 多行注释

command + n 新建文件
command + shift + n 新建窗口

option + shift + i 在所有行末尾出现光标

- 自定义
- [  在资源管理器中折叠文件夹 ] Command + option + control + /

command + shift + \  花括号之间跳转
command + shift + w 关闭窗口 ( w 是web的意思 )
command + shift + n 新建窗口 ( n 是new的意思 )
command+enter 向下插入行
command+shift+enter 向上插入行
command + shift + control + left/right 代码块选择
文件内快速定位：command + shift + o
项目内快速定位：command + t

js-quick-console
- command + shift+ L

KoroFileHeader
- 函数注释快捷键：command + control + t
- 整个文件注释:  command + control + i

在Finder 中显示
-  option + command + r

打开浏览器 - 浏览器中打开html
- option  + b


清除多余的没有使用到的import变量
- option + shift + 0
```

##### (二) 设置

##### (1) Explorer 左侧菜单项不见了

```
command + shift + p
然后输入命令: View: Reset View Locations
```

##### (2) 相关设置

```
1
鼠标滚动页面的距离
- Mouse Wheel Scroll Sensitivity
- 0.5
```

##### (3) 命令行快捷键

```
将光标移动到行首：ctrl + a
将光标移动到行尾：ctrl + e
清除当前行：ctrl + u

vscode 将光标移动到行首：command + 左箭头
vscode 将光标移动到行尾：command + 右箭头
```

## (二) 插件

##### (1) vim 插件

```
1
问题: 长按j不能持续移动？
解决:
- 1. 终端执行: defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false
- 2. 重启vscode
复原: defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool true

2
问题: vscode 安装 vim 后打中文字会抖动？
解决: 社区很多人遇到了这个问题，目前没有解决办法
```

##### (2) todo-tree

```
https://liubing.me/article/vscode/vscode-generic-plugin-recommended-for-todo-tree.html
```
