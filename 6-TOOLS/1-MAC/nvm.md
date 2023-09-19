# NVM

# 安装

```
1
安装 brew
- https://juejin.cn/post/7021884469166473230

2
安装 nvm
- https://juejin.cn/post/7083026831263137800
- https://www.xuhao.club/skill/homebrew-nvm-install/
```

# 常用命令
```
常用命令
---

nvm list
nvm install v18 // 安装
nvm uninstall <node 版本号/别名> // 删除

nvm use v16.20.1 // 使用
nvm current // 查看当前使用的node版本

nvm alias default <node版本号> // 指定别名 全局默认版本
nvm alias 别名 x.x.x // 指定别名版本
nvm unbalias 别名 x.x.x // 删除别名

nvm unload 卸载nvm
```

# 如果一时半会解决不了新开zsh版本变化的情况
```
可以指定全局默认版本来解决 
- nvm alias default node版本号
- 这样新开的zsh，全局就是指定的版本号
```