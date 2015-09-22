module.exports = {
	// Add empty lines after curly braces.
	line_after_brace: {
		src: [ 'style.css', 'editor-style.css' ],
		overwrite: true,
		replacements: [ {
			from: /\}\n(?!\n)(?!\})|\}(?=.)/g,
			to: function() {
				return '}\n\n';
			}
		} ]
	},

	// Add empty lines after DocBlocks and comments.
	line_after_docblock: {
		src: [ 'style.css', 'editor-style.css' ],
		overwrite: true,
		replacements: [ {
			from: /\*\/\n(?!\n)|\*\/(?=.)/g,
			to: function() {
				return '*/\n\n';
			}
		} ]
	},

	// Replace theme version in style.scss
	version_style: {
		src: [
			'sass/style.scss',
		],
		overwrite: true,
		replacements: [ {
			from: /Version:.*$/m,
			to: 'Version: <%= package.version %>'
		} ]
	},

	// Replace version in functions.php
	version_functions: {
		src: [
			'functions.php'
		],
		overwrite: true,
		replacements: [ {
			from: /^define\( 'MAKER_CHILD_VERSION'.*$/m,
			to: 'define( \'MAKER_CHILD_VERSION\', \'<%= package.version %>\' );'
		} ]
	}
}
