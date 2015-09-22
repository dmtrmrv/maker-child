module.exports = {
	styles: {
		files: [ 'sass/*.scss', 'sass/**/*.scss' ],
		tasks: [ 'css', 'clean:release', 'copy:release' ],
		options: {
			livereload: true
		}
	},
	php: {
		files: [ '**/*.php', '*.php' ],
		tasks: [ 'clean:release', 'copy:release' ],
	}
}
