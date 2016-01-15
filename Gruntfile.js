module.exports = function(grunt) {

	grunt.initConfig(
		{
			pkg: grunt.file.readJSON("package.json"),

			cssmin: {
				css: {
					files: [
						{
							src: "screen.css",
							dest: "screen.min.css"
						},
						{
							src: "screen_ie.css",
							dest: "screen_ie.min.css"
						}
					]
				}
			},
			watch: {
				files: ["*.css"],
				tasks: ["cssmin"]
			}
		}
	);

	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["cssmin"]);

};
