const gulp         = require('gulp');
const sass         = require('gulp-sass');
const cssmin       = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');
const jsmin        = require('gulp-jsmin');
const rename       = require('gulp-rename');
const browserSync  = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({includePaths: require('node-normalize-scss').includePaths}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('img', function() {
  return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('jsmin', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
     server: '.'
  });
  gulp.watch(['./src/sass/*.scss', './src/sass/**/*.scss'], ['sass']);
  gulp.watch('./src/img/*', ['img']);
  gulp.watch('./src/js/*', ['jsmin']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'img', 'jsmin', 'serve']);
