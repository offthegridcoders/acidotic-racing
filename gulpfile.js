var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var sass = require('gulp-sass');

var paths = {
  images: 'src/assets/**/*',
  scss: 'src/scss/**/*'
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

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['lint']);
  gulp.watch(paths.scss, ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['lint', 'sass','watch']);