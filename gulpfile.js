//copy paste fra Magnus
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var browserify  = require('gulp-browserify');
var rename = require('gulp-rename');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});


// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('./script/main.js')
        .pipe(browserify())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./'))
});

gulp.task('default', ['serve'], function(){ //['serve', 'data'],
  console.log('Retrieved contenful entries.');
});
