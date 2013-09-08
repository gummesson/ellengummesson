module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');

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
      },

      debug: {
        options: {
          style: 'expanded'
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
      }
    },

    connect: {
      server: {
        options: {
          port: 4000,
          base: '_site/',
          keepalive: true
        }
      }
    },

    watch: {
      sass: {
        files: 'assets/sass/*.scss',
        tasks: ['sass']
      },

      js: {
        files: 'assets/js/src/app.js',
        tasks: ['jshint', 'uglify']
      }
    },

    copy: {
      main: {
        files: [{
          expand: true,
          cwd:'_site/',
          src: ['**'],
          dest: '../gummesson.github.com/'
        }]
      }
    }
  });

  // For generating the site and copying it to it's local Git repo
  grunt.registerTask('default', [
    'sass:build', 'jshint', 'uglify',
    'shell:encoding', 'shell:build',
    'copy'
  ]);

  // For writing code
  grunt.registerTask('dev', [
    'sass:debug', 'jshint', 'uglify', 'watch'
  ]);

  // For writing blog posts and the like
  grunt.registerTask('serve', [
    'sass:build', 'jshint', 'uglify',
    'shell:encoding', 'shell:watch', 'connect'
  ]);

};
