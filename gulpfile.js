//////////////////////////////////////////////////////////////
// plugins
//////////////////////////////////////////////////////////////
var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    gulpIgnore = require('gulp-ignore'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');

//////////////////////////////////////////////////////////////
// sass
//////////////////////////////////////////////////////////////
gulp.task('sass', function () {
    return gulp
        .src('assets/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/css/src'))
});

//////////////////////////////////////////////////////////////
// minify css
//////////////////////////////////////////////////////////////
gulp.task('minify-css', function () {
    return gulp
        .src('assets/css/source/style.css')
        .pipe(minifyCSS({keepBreaks: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/css/build'))
});
//////////////////////////////////////////////////////////////
// compress js
//////////////////////////////////////////////////////////////
gulp.task('compress-js', function () {
    return gulp.src('templates/assets/js/src/*.js')
        .pipe(gulpIgnore.exclude(false))
        .pipe(uglify())
        .pipe(gulp.dest('js/build'))
});

//////////////////////////////////////////////////////////////
// watcher
//////////////////////////////////////////////////////////////
gulp.task('watcher', function () {
    //sass
    gulp.watch('templates/assets/sass/*.scss', ['sass']);
    gulp.watch('templates/assets/css/src/*.css', ['minify-css']);
    gulp.watch('js/src/*.js', ['compress-js']);
});