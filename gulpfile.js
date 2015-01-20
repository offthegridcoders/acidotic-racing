var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var minifyHTML = require('gulp-minify-html');

var paths = {
  images: 'src/assets/**/*',
  scss: 'src/scss/**/*',
  assets: 'src/assets/**/*',
  css: 'src/css/**/*.css',
  html: 'src/**/*.html'
};

gulp.task('lint', function() {
  gulp.src(paths.scss)
    .pipe(scsslint());
});

gulp.task('sass', function () {
    gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('compress', function() {
  gulp.src('src/js/**/*')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('minify-css', function() {
  gulp.src(paths.css)
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('image-minify', function () {
  return gulp.src(paths.assets)
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/assets'))
});

gulp.task('minify-html', function() {
  var opts = {comments:true,spare:true};
  gulp.src(paths.html)
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['lint']);
  gulp.watch(paths.scss, ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['lint', 'sass','watch']);

// Makes Distribution folder with all files minified
gulp.task('build', ['lint', 'sass','compress', 'minify-css', 'image-minify', 'minify-html']);
