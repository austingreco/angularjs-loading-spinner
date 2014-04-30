'use strict';

var gulp = require('gulp');

// Load plugins
var $ = require('gulp-load-plugins')();

// Scripts
gulp.task('scripts', function() {
	return gulp.src('app/scripts/**/*.js')
		.pipe($.jshint('.jshintrc'))
		.pipe($.jshint.reporter('default'))
		.pipe($.size());
});

// Default task
gulp.task('default', function() {
	gulp.start('watch');
});

// Connect
gulp.task('connect', $.connect.server({
	root: ['app'],
	port: 9000,
	livereload: true
}));

// Watch
gulp.task('watch', ['connect'], function() {
	gulp.start('scripts');

	// Watch for changes in `app` folder
	gulp.watch([
		'app/*.html',
		'app/scripts/**/*.js',
		'app/styles/**/*.css'
	], function(event) {
		return gulp.src(event.path)
			.pipe($.connect.reload());
	});

	// Watch .js files
	gulp.watch('app/scripts/**/*.js', ['scripts']);
});
