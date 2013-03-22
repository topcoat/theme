/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	topcoat: {
		download: {
			options: {
				srcPath: "src/",
				repos: "<%= pkg.topcoat %>"
			}
		}
	},
	stylus: {
		compile: {
			options: {
				compress: false
			},
			files: {
				'release/topcoat-desktop-light.css': ['src/theme-desktop-light.styl'],
				'release/topcoat-desktop-dark.css': ['src/theme-desktop-dark.styl']
			}
		},
		minify: {
			options: {
				compress: true
			},
			files: {
				'release/topcoat-desktop-light.min.css': ['src/theme-desktop-light.styl'],
				'release/topcoat-desktop-dark.min.css': ['src/theme-desktop-dark.styl']
			}
		}
	},
	unzip: {
		skins: {
			src: "src/skins/*.zip",
			dest: "src/skins"
		}
	},
	gruntfile: {
		src: 'Gruntfile.js'
	}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-topcoat');
	grunt.loadNpmTasks('grunt-zip');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	// Default task.
	grunt.registerTask('default', ['topcoat', 'unzip', 'stylus']);

};
