module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          '_/js/script.js' : ['_/components/js/*.js']
        }//files
      }//my_target
    },//uglify
    watch: {
      options: { livereload : true },
      script: {
        files: ['_/components/js/*.js'],
        tasks: ['uglify']
      },//script
      html: {
        files: ['*.html'],
      },//html
    },//watch
  })//initconfig
	grunt.registerTask('default', ['watch']);
}//exports