import gulp from "gulp";
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);


function styles(done) {
    gulp.src('sass/**/*.scss')
        .pipe(sass({
            errLogToConsole: false,
            onError: function (err) {
                return notify().write(err);
            }
        }))
        .pipe(gulp.dest('../public/css/'));
    done();
}

gulp.task('styles', styles);
gulp.task('watch', (done) => {
    gulp.watch('sass/**/*.scss', gulp.series([styles]));
    done();
});

