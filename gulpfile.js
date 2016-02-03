var rev = require('gulp-rev');
var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');

gulp.task('usemin', function () {
  return gulp.src('*.html')
      .pipe(usemin({
        css: [minifyCss(), 'concat'],
        // html: [minifyHtml({empty: true})],
        js: [ngAnnotate(), uglify(), rev()],
        inlinejs: [uglify()],
        inlinecss: [minifyCss(), 'concat']
      }))
      .pipe(gulp.dest('public'));
});

gulp.task('components', function(){
  return gulp.src('./js/**/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('public'));
});

gulp.task('images', function(){
  return gulp.src('./images/**/*.jpg')
    .pipe(gulp.dest('public/images'));
});

gulp.task('checks', function(){
  return gulp.src('./src/*.txt')
    .pipe(gulp.dest('public'));
});


gulp.task('build', ['usemin', 'components', 'images', 'checks'], function(){});
