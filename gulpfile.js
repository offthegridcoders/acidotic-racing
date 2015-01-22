var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');

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
gulp.task('build', ['lint', 'sass', 'clean', 'useref']);

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

gulp.task('useref', function () {
    var assets = useref.assets();
    return gulp.src(paths.html)
        .pipe(assets)
        .pipe(gulpif('**/*.js', uglify()))
        .pipe(gulpif('**/*.css', minifyCSS()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('./dist'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['lint']);
  gulp.watch(paths.scss, ['sass']);
});
