##### Mac

##### (1) applications

```
1. Thor Launcher.
2. MonitorControlLit.
3. Scroll Reverser.
4. Rectangle
```

##### (1) View process and Kill process 傻进程

```
1
View process
- $ lsof -i :8080


2
Kill process
- $ kill <PID>


3
force kill process
- $ kill -9 <PID>


4
如何权限不够，可以用一下命令来设置比较高的权限
- 确保 /var/run 目录有正确的权限
- $ sudo chmod 777 /var/run
```
