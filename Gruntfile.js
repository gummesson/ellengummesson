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
          'assets/css/style.css' : '_assets/sass/style.scss'
        }
      },

      debug: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/css/style.css' : '_assets/sass/style.scss'
        }
      }
    },

    jshint: {
      files: ['_assets/js/*.js']
    },

    uglify: {
      build: {
        src: '_assets/js/app.js',
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
        files: '_assets/sass/*.scss',
        tasks: ['sass']
      },

      js: {
        files: '_assets/js/*.js',
        tasks: ['jshint', 'uglify']
      }
    },

    copy: {
      img: {
        files: [{
          expand: true,
          cwd:'_assets/img',
          src: ['**'],
          dest: 'assets/img'
        }]
      },

      site: {
        files: [{
          expand: true,
          cwd:'_site/',
          src: ['**'],
          dest: '../gummesson.github.com/'
        }]
      }
    }
  });

  // For generating the 'assets' folder
  grunt.registerTask('assets', [
    'sass:build',
    'jshint',
    'uglify',
    'copy:img'
  ]);

  // For generating the site and copying it to it's local Git repo
  grunt.registerTask('default', [
    'assets',
    'shell:encoding',
    'shell:build',
    'copy:site'
  ]);

  // Linux version of the default task
  grunt.registerTask('nix', [
    'assets',
    'shell:build',
    'copy:site'
  ]);

  // For writing code
  grunt.registerTask('dev', [
    'sass:debug',
    'jshint',
    'uglify',
    'watch'
  ]);

  // For writing blog posts and the like
  grunt.registerTask('serve', [
    'assets',
    'shell:encoding',
    'shell:watch',
    'connect'
  ]);

};
