var gulp = require('gulp');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var tsconfig = require("./tsconfig.json");

gulp.task('default', ['compile', 'copy-views']);

gulp.task('compile', function() {
    return gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(ts(tsconfig.compilerOptions))
        //.pipe(concat("main.js"))
        .pipe(sourcemaps.write('.', {
            sourceRoot: function(file) { return file.cwd + '/src'; }
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task('copy-views', function() {
    return gulp.src("src/views/**/*.html").pipe(gulp.dest("dist/views"));
});

gulp.task('watch', function() {
    gulp.watch(["src/**/*.ts", "src/**/*.html"], ['compile', 'copy-views']);
});

gulp.task('clean', function() {
    return del(["dist"]);
});