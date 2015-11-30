module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {
        files: ['src/less/**/*.less'], // which files to watch
        tasks: ['less']
    },

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          paths: ['public/css/'],
        },
        files: {
          "public/css/style.css": "src/less/style.less" // destination file and source file
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
