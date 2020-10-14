const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync").create();

gulp.task("sass-to-css", function () {
    return gulp
        .src("src/styles/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("dist"));
});

// gulp.task('gulp-autoprefixer', function () {
//     return gulp.src('dist/main.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist'));
// });

gulp.task("sass-watch", function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch("src/styles/**/*.scss", gulp.series(["sass-to-css"]))
        .on('change', browserSync.reload);
});
