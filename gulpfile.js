var gulp 	= 	require('gulp');
var ts 		=	require('gulp-typescript');

var paths = {
	ts: ['src/**/*.ts'],
	templates: ['src/**/*.html'],
	styles: ['src/**/*.css'],
	libs: ['node_modules/angular2/**/*', 'node_modules/systemjs/**/*']
}

gulp.task('ts', function() {
	return gulp.src(paths.ts)
		.pipe(ts({
			'module': 'commonjs',
			'experimentalDecorators': true,
			'emitDecoratorMetadata': true,
			'target': 'ES5'
		})).js
		.pipe(gulp.dest('build'));
});

gulp.task('templates', function() {
	return gulp.src(paths.templates)
		.pipe(gulp.dest('build'));
});

gulp.task('styles', function() {
	return gulp.src(paths.styles)
		.pipe(gulp.dest('build'));
});

gulp.task('libs', function() {
	return gulp.src(paths.libs, {base: '.'})
		.pipe(gulp.dest('build'));
});

gulp.task('default', ['ts', 'templates', 'styles', 'libs'], function() {
	gulp.watch(paths.ts, ['ts']);
	gulp.watch(paths.templates, ['templates']);
	gulp.watch(paths.styles, ['styles']);
});
