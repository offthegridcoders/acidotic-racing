var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

var paths = {
  images: 'src/assets/**/*',
  scss: 'src/scss/**/*',
  css: 'src/css/**/*.css'
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
    .pipe(gulp.dest('./dist/'))
});

gulp.task('minify-css', function() {
  gulp.src(paths.css)
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./dist/'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['lint']);
  gulp.watch(paths.scss, ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['lint', 'sass','watch']);


gulp.task('build', ['lint', 'sass','compress', 'minify-css']);