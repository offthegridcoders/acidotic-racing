var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var fileinclude = require('gulp-file-include');

var paths = {
  scss: 'src/scss/**/*',
  assets: 'src/assets/**/*',
  css: 'src/css/**/*.css',
  html: 'src/**/*.html',
  js: 'src/js/**/*.js',
  templates: 'src/templates/_*.html',
  distHTML: 'dist/**/*.html'
};

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['lint', 'sass','watch']);

gulp.task('lint', function() {
  gulp.src(paths.scss)
    .pipe(scsslint());
});

gulp.task('sass', function () {
  gulp.src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest('./src/css'));
});

// Makes Distribution folder with all files minified
gulp.task('build', ['clean', 'useref', 'img-min'], function() {
  return gulp.src(paths.distHTML)
    .pipe(fileinclude())
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('useref', ['clean'], function () {
  var assets = useref.assets();
  gulp.src(paths.html)
    .pipe(assets)
    .pipe(gulpif('**/*.js', uglify()))
    .pipe(gulpif('**/*.css', minifyCSS()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('./dist'));
});

gulp.task('img-min', ['clean'], function () {
  return gulp.src(paths.assets)
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('fileinclude', function() {
  return gulp.src(paths.distHTML)
    .pipe(fileinclude())
    .pipe(gulp.dest('./dist'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['fileinclude']);
  gulp.watch(paths.scss, ['lint']);
  gulp.watch(paths.scss, ['sass']);
});
