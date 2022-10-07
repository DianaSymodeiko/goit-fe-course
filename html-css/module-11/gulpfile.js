const gulp = require("gulp");

gulp.task("html", function() {
    return gulp.src("./srs/index.html").pipe(gulp.dest("./build"));
});