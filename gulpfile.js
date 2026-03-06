// Import Gulp API
const { src, dest, watch, series, parallel } = require('gulp');

// Import plugins
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const browserSync = require('browser-sync').create();

// SCSS → CSS task
function scssTask() {
    return src('assets/scss/main.scss') // ไฟล์ SCSS 
        .pipe(sass().on('error', sass.logError)) // compile
        .pipe(dest('css'))                     // บันทึกไฟล์ปกติ
        .pipe(csso())                          // minify
        .pipe(dest('css/min'))                 // บันทึกไฟล์ minified
        .pipe(browserSync.stream());           // auto-refresh
}

// Watch task + BrowserSync
function watchTask() {
    browserSync.init({
        server: { baseDir: './' } // root folder ของ project
    });
    watch('assets/scss/**/*.scss', scssTask); // monitor SCSS
    watch('./*.html').on('change', browserSync.reload); // monitor HTML
}

// Default task
exports.default = series(
    scssTask,
    watchTask
);
