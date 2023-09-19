# GIT

### (1) git 安装

```
git下载
- 下载: mac 在终端中输入 git 后会自动下载 git
- 验证是否下载完毕: git --version 验证是否安装完毕
- git config --global user.name "xxx"(输入你的用户名)
- git config --global user.email "yyy"(输入你的邮箱)
```

### (2) ssh-keygen

```
ssh-keygen
- ssh-keygen -t rsa -C "woow.wu7@gmail.com"
- 根据生成的路径提示进行操作
  - 默认路径有可能是 /Users/电脑用户名/.ssh/id_rsa
  - 默认路径有可能是 /var/root/.ssh/id_rsa.pub // 如果是 sudo ssh-keygen -t rsa -C "woow.wu7@gmail.com" 就会是这个路径
  - 查看文件内容 sudo cat /var/root/.ssh/id_rsa.pub
```
