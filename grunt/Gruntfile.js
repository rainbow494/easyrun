module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    },
	
	less: {
	  test: {
		options: {		  
		},
		files: {
		  "test.css": "test.less"
		}
	  },
	  development: {
		options: {
		  paths: ["assets/css"]
		},
		files: {
		  "path/to/result.css": "path/to/source.less"
		}
	  }
	}
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // less
  grunt.loadNpmTasks('grunt-contrib-less');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);
  


};