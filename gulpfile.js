var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var pngquant = require('imagemin-pngquant');
var minifyHTML = require('gulp-minify-html');
var clean = require('gulp-clean');

var paths = {
  images: 'src/assets/**/*',
  scss: 'src/scss/**/*',
  assets: 'src/assets/**/*',
  css: 'src/css/**/*.css',
  html: 'src/**/*.html',
  js: 'src/js/**/*.js'
};

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['lint', 'sass','watch']);

// Makes Distribution folder with all files minified
gulp.task('build', ['lint', 'sass', 'clean', 'minify-css', 'minify-html', 'compress']);

gulp.task('lint', function() {
  gulp.src(paths.scss)
    .pipe(scsslint());
});

gulp.task('sass', function () {
    gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('clean', function () {
  return gulp.src('./dist/**.*')
    .pipe(clean({force: true}))
});

gulp.task('minify-css', function() {
  gulp.src(paths.css)
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('minify-html', function() {
  var opts = {comments:true,spare:true};
  gulp.src(paths.html)
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('compress', function() {
  gulp.src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['lint']);
  gulp.watch(paths.scss, ['sass']);
});
