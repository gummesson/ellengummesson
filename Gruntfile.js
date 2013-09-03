module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      build: {
        options: {
          style: 'compressed'
        },

        files: {
          'assets/css/style.css' : 'assets/sass/style.scss'
        }
      }
    },

    jshint: {
      files: ['assets/js/src/app.js']
    },

    uglify: {
      build: {
        src: 'assets/js/src/app.js',
        dest: 'assets/js/app.js'
      }
    },

    shell: {
      encoding: {
        command: 'chcp 65001',
        options: {
          async: false
        }
      },

      build: {
        command: 'jekyll build',
        options: {
          async: false
        }
      },

      watch: {
        command: 'jekyll build --watch',
        options: {
          async: true
        }
      },

      server: {
        command: 'nws -d _site/ -p 4000',
        options: {
          async: true
        }
      }
    },

    watch: {
      css: {
        files: 'assets/sass/*.scss',
        tasks: ['sass']
      },

      js: {
        files: 'assets/js/src/app.js',
        tasks: ['jshint', 'uglify']
      }
    }
  });

  grunt.registerTask('default', [
    'sass', 'jshint', 'uglify',
    'shell:encoding', 'shell:build'
  ]);

  grunt.registerTask('dev', [
    'sass', 'jshint', 'uglify',
    'shell:encoding', 'shell:watch', 'shell:server',
    'watch'
  ]);

};
