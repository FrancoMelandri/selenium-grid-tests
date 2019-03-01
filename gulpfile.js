const gulp = require('gulp-param')(require('gulp'), process.argv),
    eslint = require('gulp-eslint');

gulp.task('lint', function () {
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
