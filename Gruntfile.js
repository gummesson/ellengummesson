module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var projectConfig = {
    assets: {
      src: '_assets',
      dest: 'assets'
    }
  };

  grunt.initConfig({
    assets: projectConfig.assets,

    sass: {
      build: {
        options: {
          style: 'compressed'
        },

        files: {
          '<%= assets.dest %>/css/style.css' : '<%= assets.src %>/sass/style.scss'
        }
      },

      debug: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= assets.dest %>/css/style.css' : '<%= assets.src %>/sass/style.scss'
        }
      }
    },

    jshint: {
      files: ['<%= assets.src %>/js/*.js']
    },

    uglify: {
      build: {
        src: '<%= assets.src %>/js/app.js',
        dest: '<%= assets.dest %>/js/app.js'
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
        files: '<%= assets.src %>/sass/*.scss',
        tasks: ['sass:debug']
      },

      js: {
        files: '<%= assets.src %>/js/*.js',
        tasks: ['jshint', 'uglify']
      }
    },

    copy: {
      img: {
        files: [{
          expand: true,
          cwd:'<%= assets.src %>/img',
          src: ['**'],
          dest: '<%= assets.dest %>/img'
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
  grunt.registerTask('assets', ['sass:build', 'jshint', 'uglify', 'copy:img']);

  // For generating the site and copying it to it's local Git repo
  grunt.registerTask('default', ['assets', 'shell:encoding', 'shell:build', 'copy:site']);

  // For generating the site without copying it
  grunt.registerTask('build', ['assets', 'shell:encoding', 'shell:build']);

  // For writing code
  grunt.registerTask('dev', ['sass:debug', 'jshint', 'uglify', 'watch']);

  // For writing blog posts and the like
  grunt.registerTask('serve', ['assets', 'shell:encoding', 'shell:watch', 'connect']);

};
