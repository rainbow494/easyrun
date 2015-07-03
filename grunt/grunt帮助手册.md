#简述
- 本文仅为概述，具体步骤和解释请参照[Grunt快速入门][1]
- Nodejs:  Grunt运行环境
- Grunt: 自动化脚本运行工具
- 所有命令均在```Node.js command prompt```控制台下执行

#快速入门
- 安装Nodejs [下载][2]
- 下载文件夹下所有文件
- 执行 ```npm install``` 生成文件夹 *Node_modules*
- 执行 ```grunt``` 生成文件 *test.min.js*
- 执行 ```grunt less:test --force```生成文件 *test.css*

#安装步骤


20. 安装grunt
- 创建文件夹 ```c:\easyrun\grunt```
- 执行```npm install -g grunt-cli``` *(表示安装全局grunt接口，可调用当前目录下的grunt model)*
- 在当前目录添加```package.json```文件
    ```
    {
    "name": "testGrunt",
    "version": "0.1.0",
    "description": "this is test project with grunt.",
    "author": "airen",
    "license": "BSD",
    "devDependencies": {
            "grunt": "~0.4.1"
        }
    }
    ```

- 执行```$ npm install``` 安装grunt model

30. 添加Grunt插件

- 通过命令安装插件，并写入package.json文件中 *(插件名请自行google)*
    ```
$ npm install [grunt插件名] --save-dev
例如：
$ npm install grunt-less --save-dev
    ``` 

40. 添加Grunt模板
- 在当前目录添加```Gruntfile.js```
    ```
    module.exports = function(grunt){
        // 构建任务配置
        grunt.initConfig({
            //读取package.json的内容，形成个json数据
            pkg: grunt.file.readJSON('package.json'),
    
            //Grunt 任务配置
        });
    
        //加载Grunt插件
        grunt.loadNpmTasks('Grunt插件名');
    
        //默认的Grunt任务
        grunt.registerTask('default',['Grunt任务'])；
    };
    
    例如：
    module.exports = function(grunt) {

      // Project configuration.
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src: 'src/<%= pkg.name %>.js',
            dest: 'build/<%= pkg.name %>.min.js'
          }
        }
      });
    
      // 加载包含 "uglify" 任务的插件。
      grunt.loadNpmTasks('grunt-contrib-uglify');
    
      // 默认被执行的任务列表。
      grunt.registerTask('default', ['uglify']);
    
    };
    ```
    
40. 在控制台中执行grunt 生成相应文件


  [1]: http://www.gruntjs.net/getting-started
  [2]: https://nodejs.org/