module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		// pkg : grunt.file.readJSON('package.json'),
		// uglify : {
			// options : {
				// banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			// },
			// build : {
				// src : '<%= pkg.name %>.js',
				// dest : '<%= pkg.name %>.min.js'
			// }
		// },

		less : {
			// test : {
				// options : {},
				// files : {
					// "test.css" : "test.less"
				// }
			// },
			compile : {
				// options : {
					// //paths : ['../easyrunsite/style']
				// },
				files : {
					'../easyrunsite/style/main.css' : ['../easyrunsite/style/main.less']
					//'main.css' : ['main.less']
				}
			}
		},

		watch : {
			less: {
				//files : 'F:/GitHub/**/*.less',
				files: ['../easyrunsite/**/*.less'],
				tasks: ['less'],
				options : {
					livereload : true,
				},
			},
			// css : {
				// files : '**/*.sass',
				// tasks : ['sass'],
				// options : {
					// livereload : true,
				// },
			// },
		},
	});

	// // 加载包含 "uglify" 任务的插件。
	// grunt.loadNpmTasks('grunt-contrib-uglify');

	// less
	grunt.loadNpmTasks('grunt-contrib-less');
	
	// watch
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 默认被执行的任务列表。
	//grunt.registerTask('default', ['less', 'watch']);
	grunt.registerTask('default', ['less','watch']);

	grunt.registerTask('less-build', ['less:compile']);
	
	//grunt.registerTask('watch', ['watch']);

};
