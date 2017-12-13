const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['build::style']);

gulp.task('build::style', ['sass--custom', 'css--vendors']);

gulp.task('sass--custom', function () {
   gulp.src('./public/sass/main.scss')
       .pipe(sass())
       .pipe(cssnano())
       .pipe(autoprefixer({
           browsers: ['> 1%', 'IE 7','IE 8','IE 9']
       }))
       .pipe(gulp.dest('./public/build/css/'))
});

gulp.task('css--vendors', function () {
    gulp.src(['./node_modules/normilize.css/normilize.css'])
        .pipe(cssnano())
        .pipe(concat('vendors.css'))
        .pipe(gulp.dest('./public/build/css/'))
});