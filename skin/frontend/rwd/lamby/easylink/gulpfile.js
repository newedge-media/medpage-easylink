var gulp = require('gulp');
var plumber = require('gulp-plumber');

var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var minifycss = require('gulp-minify-css');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var browsersync = require('browser-sync').create();

gulp.task('styles', function () {
	return gulp.src('scss/*.scss')
	.pipe(plumber({
		errorHandler: function (error) {
			console.log(error.message);
			this.emit('end');
		}
	}))
	// .pipe(sass())
	.pipe(sass({ includePaths: ['*'] }))
	.pipe(postcss([
		autoprefixer({ browsers: ['ie 8', 'firefox 26', 'safari 6'] })
	]))
	// .pipe(minifycss({
	// 	keepSpecialComments: 0
	// }))
	.pipe(gulp.dest('css'));
});

var js_files = [
	'scripts/libs/jquery.bxslider/jquery.dotdotdot.js',
	'scripts/libs/jquery.bxslider/jquery.bxslider.js',

	'scripts/common.js'
];

gulp.task('js', function() {
	return gulp.src(js_files)
	.pipe(plumber({
		errorHandler: function (error) {
			console.log(error.message);
			this.emit('end');
		}
	}))
	.pipe(concat('easylink.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('js'));
});

gulp.task('build', ['styles', 'js']);

gulp.task('styles-watch', ['styles'], browsersync.reload);
gulp.task('js-watch', ['js'], browsersync.reload);

gulp.task('serve', ['build'], function() {
	browsersync.init({
		proxy: 'localhost:80'
	});

	gulp.watch('scss/**/*', ['styles-watch']);
	gulp.watch('scripts/**/*', ['js-watch']);

	gulp.watch(['css/**/*', 'js/**/*']).on('change', browsersync.reload);
});

gulp.task('default', ['serve']);
