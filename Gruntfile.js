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
          'app/manager.js',
          'app/config.js',
          'app/models/state_service.js',
          'app/models/login_service.js',
          'app/models/store_service.js',
          'app/models/release_service.js',
          'app/models/restock_service.js',
          'app/models/app_service.js',
          'app/models/account_service.js',
          'app/models/comments_service.js',
          'app/models/news_service.js',
          'app/models/sales_service.js',
          'app/models/menu_service.js',
          'app/controllers/app_c.js',
          'app/controllers/store_c.js',
          'app/controllers/releases_c.js',
          'app/controllers/account_c.js',
          'app/controllers/past_releases_c.js',
          'app/controllers/details_c.js'
        ],
        dest: 'dist/application.concat.js'
      },
      library: {
        src: [
          'js/lib/angular.js',
          'js/lib/angular-route.js',
          'js/lib/angular-animate.js',
          'js/lib/angular-sanitize.min.js',
          'js/lib/angular-vs-repeat.js'
        ],
        dest: 'dist/library.concat.js'
      },
      vendor: {
        src: [
          'js/jquery-2.1.0.min.js',
          'js/jquery.smoothState.min.js',
          'js/materialize.min.js',
          'js/swiper.min.js',
          'js/functions.js',
          'js/moment.js',
          'js/lazyload.min.js',
          'js/gage.js',
          'js/toastr.js',
          'js/toastr-init.js'
        ],
        dest: 'dist/vendor.concat.js'
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
          'dist/application.min.js': ['dist/application.concat.js'],
          'dist/vendor.min.js': ['dist/vendor.concat.js'],
          'dist/library.min.js': ['dist/library.concat.js']
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
