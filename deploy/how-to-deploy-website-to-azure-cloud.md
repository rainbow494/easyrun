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

- 在实例面板下方找到对应的安全组，在安全组的入站规则内打开rdp端口3389
- 安装 lxdm / xrdp, 设置登录密码
```
另外：执行文档内命令时，请将Sudo，sdo改为sudo
```
- 通过windows的mstsc命令连接主机

## 如何安装FTP
- [Set Up FTP Connection on Amazon EC2 Instance using FileZilla](http://www.tuicool.com/articles/eUFVziV) *（第五步的传输协议要记得选择sftp）*
- 连接前请先将FTP设置为主动连接模式

## 如何安装nginx
> 下列步骤主要来自于：
> *[How To Install and Configure Nginx on Amazon ec2 RHEL and Ubuntu Instances] [4.10]*
> *[ubuntu-Nginx] [4.20]*

- 在实例面板下方找到对应的安全组，在安全组的入站规则内打开http端口80
- 按文档内相应Linux主机系统的说明安装nginx安装包
- nano /var/www/
- chown  ubuntu:ubuntu  /var/www/easyrun.hk/public
- chmod 777 /var/www/
- chmod 777 /var/www/easyrun.hk/

- 利用ftp或命令行修改待操作文件权限(sudo su, chown ubuntu:ubuntu /etc/nginx/sites-available/default,  chmod 777 /etc/nginx/sites-available/default)
- 修改nginx的配置文件：/etc/nginx/sites-available/default
- 修改相应站点的权限：/var/www/easyrun.hk/public
- 绑定域名 ```server_name *.easyrun.hk

- 重启nginx(service nginx restart)

## 域名绑定
- 将域名A记录与Instance IP或elastic IP绑定


## 如何部署nodejs

- nodejs安装
http://blog.fantasy.codes/node.js/2014/11/25/aws-nodejs/
```
AWS下运行node程序的命令行是nodejs，如果希望利用node启动nodejs程序则请参考下面的连接
http://stackoverflow.com/questions/20057790/what-are-the-differences-between-node-js-and-node
```

- npm安装
```
curl -L https://npmjs.org/install.sh | sh
https://www.npmjs.com/package/npm
```

[2.10]: (https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/putty.html#putty-private-key)
[2.20]: (https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/putty.html?console_help=true)
[3.10]: (http://www.tuicool.com/articles/J73m63)
[4.10]: (http://www.tuicool.com/articles/jQFvma)
[4.20]: (http://wiki.ubuntu.com.cn/Nginx)
