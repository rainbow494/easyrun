module.exports = function (grunt) {

    // 项目配置(任务配置)
    grunt.initConfig({
        // 读取我们的项目配置并存储到pkg属性中
        pkg : grunt.file.readJSON('package.json'),
        clean : {
            build : ['build/*'],
        },
        copy : {
            build : {
                files : [{
                        expand : true,
                        src : ['app.js', 'package.json'],
                        dest : 'build',
                    }
                ]
            }
        }
    }); // grunt.initConfig配置完毕

    // 加载插件
    // Deploy
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['clean', 'copy']);

    grunt.registerTask('build', ['clean:build', 'copy:build']);
};
