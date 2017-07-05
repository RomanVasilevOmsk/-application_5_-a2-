var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var reload      = browserSync.reload;
var minify = require('gulp-minify');
var tinypng = require('gulp-tinypng');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixertask2', function () {
    return gulp.src('commons/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('commons/css'));
});

gulp.task('tinypng', function () {
    gulp.src('commons/images/**/*')
        .pipe(tinypng('sHYF22n0Q3Cq55ie_Gl6ofCc1HsYcKoV'))
        .pipe(gulp.dest('commons/images'));
});

var paths = {
  html:['index.html'],
  css:['commons/css/*.scss'],
  script:['commons/js/script.js']
};

//html
gulp.task('html', function(){
  gulp.src(paths.html)
  .pipe(reload({stream:true}));
});

// css & saas
gulp.task('css', function(){
  return gulp.src(paths.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(gulp.dest('commons/css'))
    .pipe(reload({stream:true}));
})

// JavaScript
gulp.task('scripts', function(){
  return gulp.src(paths.script)
    .pipe(minify())
    .pipe(gulp.dest('commons/js'))
    .pipe(reload({stream:true}));
});

//livereload
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false
  });
});



gulp.task('watcher',function(){
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.script, ['scripts']);
  gulp.watch(paths.html, ['html']);
});
gulp.task('default', ['watcher','browserSync']);
