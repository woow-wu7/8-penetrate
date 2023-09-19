# Vscode

## (一) 设置

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
