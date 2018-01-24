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
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');

//////////////////////////////////////////////////////////////
// sass
//////////////////////////////////////////////////////////////
gulp.task('sass', function() {
    return gulp
        .src('assets/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('../build/sourcemaps'))
        .pipe(gulp.dest('assets/css/src'))
});

//////////////////////////////////////////////////////////////
// minify css
//////////////////////////////////////////////////////////////
gulp.task('minify-css', function() {
    return gulp
        .src('assets/css/src/**/*.css')
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(minifyCSS({ keepBreaks: false }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/css/build'))
});
//////////////////////////////////////////////////////////////
// compress js
//////////////////////////////////////////////////////////////
gulp.task('compress-js', function() {
    return gulp.src(['assets/js/src/**/*.js', '!assets/js/src/**/*.min.js', '!assets/js/src/libs/**/*.js'])
        .pipe(gulpIgnore.exclude(false))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/js/build'))
});

compressJs = function(obj){
    function createErrorHandler(name) {
        return function (err) {
            console.error('Error from ' + name + ' in compress task', err.toString());
        };
    }
    var src = obj.path;
    var dest = obj.path.replace(/[^/\\]+$/, '').replace(/\\/g, '/').replace('/src/', '/build/'),startTime = (new Date).getTime();

    gulp.src(src).on('error', createErrorHandler('gulp.src'))
        .pipe(gulpIgnore.exclude(false))
        .pipe(uglify()).on('error', createErrorHandler('uglify'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(dest)).on('error', createErrorHandler('gulp.dest'))
        .on('end', function(){
            endTime = (new Date).getTime() - startTime;
            console.log('Finished after ' + endTime + 'ms.');
            console.log('File Saved in: ' + dest);
        });
}

//////////////////////////////////////////////////////////////
// watcher
//////////////////////////////////////////////////////////////
gulp.task('watcher', function() {
    //sass 
    gulp.watch('assets/sass/**/*.scss', ['sass']);
    gulp.watch('assets/css/src/**/*.css', ['minify-css']);
    gulp.watch('assets/js/src/**/*.js', ['compress-js']);
});
