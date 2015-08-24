var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('styles', function() {
  return sass('assets/css/socicon.scss', { style: 'expanded' })
    .pipe(gulp.dest('assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/css/socicon.scss', ['styles']);
});

// Default Task
gulp.task('default', ['styles', 'watch']);