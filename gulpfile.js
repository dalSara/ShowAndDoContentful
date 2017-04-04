//copy paste fra Magnus
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var browserify  = require('browserify');
//var watchify    = require('watchify');
var rename      = require('gulp-rename');
var source      = require('vinyl-source-stream');
var sourceFile  = './scripts/main.js';
var destFolder  = './js/';
var destFile    = 'bundle.js';


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
    gulp.src('./scripts/main.js')
        .pipe(browserify())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./'))
});
/*
gulp.task('browserify', function() {
    return browserify(sourceFile)
        .bundle()
        .pipe(source(destFile))
        .pipe(gulp.dest(destFolder));
});

  var browserifyWatch = watchify(browserify({
    cache: {},
    packageCache: {},
    debug: true,
    entries: files
  });

gulp.task('watch', function() {
    var bundler = watchify(sourceFile);
    bundler.on('update', rebundle);

    function rebundle() {
        return bundler.bundle()
            .pipe(source(destFile))
            .pipe(gulp.dest(destFolder));
    }

    return rebundle();
});*/

gulp.task('default', ['serve'], function(){ //['serve', 'data', 'watch' , 'browserify'],
    console.log('Retrieved contenful entries.');
});
