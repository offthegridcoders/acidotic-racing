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
  html: [
    'src/*.html',
    'src/contact/*.html',
    'src/events/**/*.html',
    'src/photos/*.html',
    'src/results/*.html',
    'src/why-acidotic/*.html'
  ],
  js: 'src/js/**/*.js',
  templates: 'src/templates/_*.html'
};

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['lint', 'sass','watch']);

// Makes Distribution folder with all files minified
gulp.task('build', ['lint', 'sass', 'clean', 'fileinclude', 'useref', 'img-min']);

gulp.task('lint', function() {
  gulp.src(paths.scss)
    .pipe(scsslint());
});

gulp.task('sass', function () {
    gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('fileinclude', function() {
  return gulp.src(paths.html)
    .pipe(fileinclude())
    .pipe(gulp.dest('./dist'));
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

gulp.task('img-min', function () {
    return gulp.src(paths.assets)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./dist/assets'));
});
// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['lint']);
  gulp.watch(paths.scss, ['sass']);
});
