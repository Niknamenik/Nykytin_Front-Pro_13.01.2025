const { task, src, dest, series } = require("gulp");
const minify = require("gulp-minify");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass")(require("sass"));

task("js", () => src("src/*.js").pipe(minify()).pipe(dest("dist")));

task("css", () =>
  src("src/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist"))
);

task("default", series("js", "css"));
