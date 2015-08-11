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

## 其他可选模块

- Send mail by smtp ---- **"nodemailer": "^1.4.0", **

- Daemon process ---- **"forever": "^0.15.1",**
