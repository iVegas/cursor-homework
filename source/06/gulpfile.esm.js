import gulp from "gulp";
const sass = require('gulp-sass')(require('sass'));
import pug from "gulp-pug";


function taskScss(done) {
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

function taskPug(done) {
    gulp.src('./pug/*.pug')
        .pipe(
            pug({
            })
        )
        .pipe(gulp.dest('../public'));
    done();
}

gulp.task('styles', taskScss);
gulp.task('pug', taskPug);
gulp.task('watch', (done) => {
    gulp.watch('sass/**/*.scss', gulp.series([taskScss]));
    gulp.watch('./pug/*.pug', gulp.series([taskPug]));
    done();
});

