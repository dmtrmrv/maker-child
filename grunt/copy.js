module.exports = {
	release: {
		src: [
			'./**',
			'!./node_modules/**',
			'!./grunt/**',
			'!./assets/css/**',
			'!./assets/js/src/**',
			'!./assets/js/src/project.min.js',
			'!./assets/fonts/fontello/css/fontello-*.css',
			'!./assets/fonts/fontello/css/animation.css',
			'!./assets/fonts/fontello/config.json',
			'!./assets/fonts/fontello/demo.html',
			'!./assets/fonts/fontello/README.txt',
			'!./package.json',
			'!./.csscomb.json',
			'!./.jscs.json',
			'!./Gruntfile.js',
			'!./*.sublime-workspace',
			'!./*.sublime-project',
			'!./*.ruleset.xml',
			'!./.DS_Store',
			'!./**/.DS_Store'
		],
		dest: '../build/<%= package.name %>',
		expand: true
	}
}
