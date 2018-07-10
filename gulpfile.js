const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');

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

gulp.task('js', function () {
    gulp.src('public/js/app.js')
        .pipe(rollup({
            "plugins": [
                require("rollup-plugin-babel")({
                    "presets": ['env', {'modules': false}],
                    "plugins": ['transform-runtime'],
                    minified: true,
                })
            ],
            input: './public/js/app.js',
        }))
        .pipe(gulp.dest('public/build'))
});

gulp.task('watch', function () {
    gulp.watch('./public/sass/**/*.scss', ['sass--custom']);
    gulp.watch('./public/js/**/*.js', ['js']);
});


gulp.task('build::style', ['sass--custom', 'css--vendors']);

gulp.task('build::js', ['js']);

gulp.task('default', ['build::style', 'build::js', 'watch']);
