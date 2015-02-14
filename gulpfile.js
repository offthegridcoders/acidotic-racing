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

gulp.task('default', ['build', 'clean-up'], function() {});

// Makes Distribution folder with all files minified
gulp.task('build', ['sass', 'clear', 'useref', 'img-min'], function() {
  return gulp.src(paths.distHTML)
    .pipe(fileinclude())
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', ['lint'], function () {
  return gulp.src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest('./src/css'));
});

gulp.task('useref', ['fileinclude'], function () {
  var assets = useref.assets();
  return gulp.src(paths.html)
    .pipe(assets)
    .pipe(gulpif('**/*.js', uglify()))
    .pipe(gulpif('**/*.css', minifyCSS()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('./dist'));
});

gulp.task('img-min', ['clear'], function () {
  return gulp.src(paths.assets)
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('img-copy', ['clear'], function() {
  return gulp.src(paths.assets)
  // Perform minification tasks, etc here
  .pipe(gulp.dest('./dist/assets'));
})

gulp.task('lint', function() {
  return gulp.src(paths.scss)
    .pipe(scsslint());
});

gulp.task('clear', ['sass'], function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('clean-up', ['build'], function() {
  return gulp.src([
    'src/css/defaults',
    'src/css/layout/',
    'src/css/modules/',
    'dist/partials/'], {read: false})
    .pipe(clean());
});

gulp.task('fileinclude', ['clear'], function() {
  return gulp.src(paths.distHTML)
    .pipe(fileinclude())
    .pipe(gulp.dest('./dist'));
});
