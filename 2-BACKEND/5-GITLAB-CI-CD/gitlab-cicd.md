##### Gitlab CI CD

- [link](https://juejin.cn/post/6897884843275714567)

##### (1) Pipeline Stage Job

- The relationship between Pipeline, Stage and Job.

```
+------------------+           +----------------+
|                  |  trigger  |                |
|   Commit / MR    +---------->+    Pipeline    |
|                  |           |                |
+------------------+           +----------------+

+--------------------------------------------------------+
|                                                        |
|  Pipeline                                              |
|                                                        |
|  +-----------+     +------------+      +------------+  |
|  |  Stage 1  |---->|   Stage 2  |----->|   Stage 3  |  |
|  +-----------+     +------------+      +------------+  |
|                                                        |
+--------------------------------------------------------+

+------------------------------------------+
|                                          |
|  Stage 1                                 |
|                                          |
|  +---------+  +---------+  +---------+   |
|  |  Job 1  |  |  Job 2  |  |  Job 3  |   |
|  +---------+  +---------+  +---------+   |
|                                          |
+------------------------------------------+

```

##### (2) The whole process of Gitlab CI CD

```
1
Install Gitlab Runner
- Official website link: https://docs.gitlab.com/runner/install/linux-repository.html
- selecting the suitable platform to install. (docker)
  - (1) Run the register command
  - (2) select 'Docker' tabs.
- specific processes.
  - docker pull gitlab/gitlab-runner
  - docker run --rm -it -v /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register
```
