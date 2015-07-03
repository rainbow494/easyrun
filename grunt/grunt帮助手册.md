#����
- ���Ľ�Ϊ���������岽��ͽ��������[Grunt��������][1]
- Nodejs:  Grunt���л���
- Grunt: �Զ����ű����й���
- �����������```Node.js command prompt```����̨��ִ��

#��������
- ��װNodejs [����][2]
- �����ļ����������ļ�
- ִ�� ```npm install``` �����ļ��� *Node_modules*
- ִ�� ```grunt``` �����ļ� *test.min.js*
- ִ�� ```grunt less:test --force```�����ļ� *test.css*

#��װ����


20. ��װgrunt
- �����ļ��� ```c:\easyrun\grunt```
- ִ��```npm install -g grunt-cli``` *(��ʾ��װȫ��grunt�ӿڣ��ɵ��õ�ǰĿ¼�µ�grunt model)*
- �ڵ�ǰĿ¼���```package.json```�ļ�
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

- ִ��```$ npm install``` ��װgrunt model

30. ���Grunt���

- ͨ�����װ�������д��package.json�ļ��� *(�����������google)*
    ```
$ npm install [grunt�����] --save-dev
���磺
$ npm install grunt-less --save-dev
    ``` 

40. ���Gruntģ��
- �ڵ�ǰĿ¼���```Gruntfile.js```
    ```
    module.exports = function(grunt){
        // ������������
        grunt.initConfig({
            //��ȡpackage.json�����ݣ��γɸ�json����
            pkg: grunt.file.readJSON('package.json'),
    
            //Grunt ��������
        });
    
        //����Grunt���
        grunt.loadNpmTasks('Grunt�����');
    
        //Ĭ�ϵ�Grunt����
        grunt.registerTask('default',['Grunt����'])��
    };
    
    ���磺
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
    
      // ���ذ��� "uglify" ����Ĳ����
      grunt.loadNpmTasks('grunt-contrib-uglify');
    
      // Ĭ�ϱ�ִ�е������б�
      grunt.registerTask('default', ['uglify']);
    
    };
    ```
    
40. �ڿ���̨��ִ��grunt ������Ӧ�ļ�


  [1]: http://www.gruntjs.net/getting-started
  [2]: https://nodejs.org/