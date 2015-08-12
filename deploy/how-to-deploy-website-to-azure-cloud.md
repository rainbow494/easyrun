# 如何在Amazon Cloud部署网站

## 目录

10. 申请账号
20. 生成实例
30. 开启GUI

## 申请账号
- 填入美国地址，绑定信用卡，验证电话号码
- 如果失败直接进入申诉流程

## 生成实例
- 选择主机机房
- 生成系统实例
- 点击连接，到处公钥
- 利用puttygen生成私钥 *[使用 PuTTYgen 转换您的私有密钥] [2.10]*
- 利用putty连接实例 *[启动 PuTTY 会话] [2.20]*

## 开启GUI
> 下列步骤主要来自于：*[How To Set Up GUI On Amazon EC2 Ubuntu server] [3.10]*

> **另外：执行文档内命令时，请将Sudo，sdo改为sudo**

- 在实例面板下方找到对应的安全组，在安全组的入站规则内打开rdp端口3389
- 安装 lxdm / xrdp, 设置登录密码
- 通过windows的mstsc命令连接主机



[2.10]: (https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/putty.html#putty-private-key)
[2.20]: (https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/putty.html?console_help=true)
[3.10]: (http://www.tuicool.com/articles/J73m63)
