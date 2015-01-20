module.exports = function (grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
    	options: {
        	livereload: true
      	},
      	compass: {
        	files: ['**/*.{scss,sass}'],
        	tasks: ['compass:dev'],
      	},
    },
    // compass task config
    compass: {
        dev: {
            options: {
            	sassDir:['scss'],
            	cssDir:['css'],
            	environment:'development'
            }
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  	// register a default task.
	grunt.registerTask('default', ['watch']);
};