## 安装
- 依赖模块安装
```
npm install
```

## 运行

- 全局安装forever(进程守护模块)
```
npm install -g forever -save
```

- 启动服务
```
forever start app.js
```

- 重启服务
```
forever restart app.js
*forever还包括一系列进程监视，测试功能，安装相关插件还可对主机状况进行监视*
```


## 调试

- 安装调试工具
```
npm install -g node-inspector
```

- 运行调试（利用默认浏览器调试，浏览器必须是webkit内核）
```
node-debug app.js
```
[参考文档](http://stackoverflow.com/questions/1911015/how-to-debug-node-js-applications)

## 常见问题

- node-debug 监听端口与nginx冲突（显示nginx相关页面而不是调试画面）
```
解决方法： 更换端口
命   令： node-debug -p 80xx app.js
```

- node-debug 启动失败

```
查找占用端口的进程号： netstat -aon|findstr 1025
例如返回结果为：LISTENING 14156
根据进程号查找应用名： tasklist|findstr "14156"
例如返回结果为：node.exe
杀死进程：taskkill /F /IM node.exe
```
