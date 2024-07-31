##### Docker

##### (1) Install

```
(一)
The process of installing Docker


(1) 如果安装过Docker，先卸载 docker 或者 docker-engine 以及相关的依赖
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine


(2) 安装Docker需要的相关插件
- yum-utils
- device-mapper-persistent-data
- lvm2
$ sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2


(3) 设置稳定的存储库 - 仓库
- 官方仓库
$ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
- 阿里云仓库：如果安装太慢，用阿里云镜像
$ sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo


(4) 启用存储库（可选）
$ sudo yum-config-manager --enable docker-ce-nightly


(5) 安装最新版本的Docker Engine-Community和containerd
$ sudo yum install docker-ce docker-ce-cli  containerd.io
    - 1. 查询可用版本：
        - yum list docker-ce--show duplicates| sort-r
    - 2. 安装指定版本
        - $ sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
        - $ sudo yum install docker-ce-[第一步查出来的版本号] docker-ce-cli-[在使用1中的查询查出cli的版本] containerd.io


(6) 启动 - 安装完成后
$ sudo systemctl start docker


(7) 设置国内镜像仓库
- /var/lib/docker/
- Images, containers, volumes, and networks stored in /var/lib/docker/
- aren't automatically removed when you uninstall Docker.
---
具体步骤如下:
vi /etc/docker/daemon.json
{
  "registry-mirrors": [
    "https://docker.m.daocloud.io",
    "https://dockerproxy.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://docker.nju.edu.cn"
  ]
}
sudo systemctl daemon-reload
sudo systemctl restart docker


(8) 验证 hello-world
$ sudo docker run hello-world
```

##### (2) Installation precautions

```
1
The location of the docker.
- /var/lib/docker/
- Images, containers, volumes, and networks stored in /var/lib/docker/
- aren't automatically removed when you uninstall Docker.


2
Official website.
- https://docs.docker.com/engine/install/centos/
- [我的掘金](https://juejin.cn/post/6844904099024994312#heading-8)


3
To check whether 'yum' is installed.
- $rpm -qa yum


4
docker 拉取镜像时总是 retry，如何解决
- 在 Docker 守护进程配置文件（daemon.json）中添加加速器地址：
- tutorial: https://www.cnblogs.com/blogof-fusu/p/18257012
- tutorial: https://www.cnblogs.com/blogof-fusu/p/18257012
{
  "registry-mirrors": ["https://your-mirror-url"]
}
sudo systemctl daemon-reload
sudo systemctl restart docker
```
