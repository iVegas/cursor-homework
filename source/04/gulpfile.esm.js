import gulp from "gulp";
const sass = require('gulp-sass')(require('sass'));


function styles(done) {
    gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('../public/css/'));
    done();
}

gulp.task('styles', styles);
gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', gulp.series([styles]));
});

