module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '4.5.0',
      banner: '/*! SoleInsider  - v<%= meta.version %> - ' 
    },

    lint: {
      files: ['Gruntfile.js']
    },
 
   concat: {
      application: {
        src: [
          'app/config.js',
          'app/controllers/*.js',
          'app/models/*.js',
        ],
        dest: 'app/dist/application.concat.js'
      },
      plugins: {
        src: [
          'js/plugins/*.js',
        ],
        dest: 'app/dist/plugins.concat.js'
      }
    },
    watch: {
      files: [
        'Gruntfile.js',
        'app/app.js',
        'app/controllers/*.js',
        'app/services/*.js',
      ],
      tasks: ['concat']
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {
        jQuery: true
      }
    },
    
  uglify: {
    application: {
        files: {
          'app/dist/application.min.js': ['app/dist/application.concat.js']
        }
    }
  }
    
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task.  
  grunt.registerTask('default', [ 'concat','uglify']);
};