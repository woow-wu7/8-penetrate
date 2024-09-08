##### Redis

##### (1) Redis Download and Install

```
1
Install homebrew

(一) What's the homebrew?
- 1. Homebrew is a package manager for MacOS.
- 2. It can easily install various software.

(二)
- 1. https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh
- 2. Access the link above to copy the code and then save it in a file named 'homebrew-installer.sh'

(三)
- 1. $ /bin/bash homebrew-installer.sh
- 2. execute the command above to install homebrew.

(四)
- 1. $ (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/xiawu/.zprofile
- 2. eval "$(/opt/homebrew/bin/brew shellenv)"
- 3. Run these two commands above in your terminal to add Homebrew to your PATH.

(五)
- 1. $ homebrew --version
- 2. How to verify whether 'homebrew' is installed successfully? run the command above in bash terminal.

(六)
- 1. $ brew install redis
- 2. install redis

(七)
- 1. automatic: $ brew services start redis
- 1. manual: $ redis-server /usr/local/etc/redis.conf
- 2. start redis

(八)
- 1. $ redis-cli ping
- 2. How to verify whether 'redis' is started successfully? run the command above in bash terminal.
- 3. You will get the value 'PONG'
// - or $ redis-cli ping
// - or $ redis-server

(九)
- 1. $ brew services info redis
- 2. check the status, you will get like this above.
redis (homebrew.mxcl.redis)
Running: ✔
Loaded: ✔
Schedulable: ✘
User: xiawu
PID: 13169

(十)
- start: $ brew services start redis
- stop: $ brew services stop redis

------- ------- ------- ------- ------- ------- -------
------- ------- ------- ------- ------- ------- -------

(十一) 重要重要重要!!!
配置redis: 找到redis配置文件路径
- 1. 输入命令: $ redis-cli INFO
- 2. 找到: config_file ------ ( config_file:/opt/homebrew/etc/redis.conf )
- 3. 输入命令: $ vim /opt/homebrew/etc/redis.conf
- 4. 添加: requirepass yourpassword
- 5. 重启: $ brew services restart redis

(十二) AnotherRedisDesktopManager 客户端管理软件来管理 redis
- 1. official website: https://github.com/qishibo/AnotherRedisDesktopManager/releases
- 2. 输入 host port password 即可

(十三) 当你设置了密码后，用命令行终端时，输入 redis-cli 后
- 你需要输入 AUTH yourPassword
```

##### (2) Redis Application / AnotherRedisDesktopManager

```
AnotherRedisDesktopManager

- official website: https://github.com/qishibo/AnotherRedisDesktopManager/releases
- 输入 host port password 即可
```

##### (3) Common Commands

```
1
$ ps axu | grep redis ------------- view process.

2
$ redis-cli shutdown -------------- turn off redis.

3
$ brew services info redis ------- check the status
```
