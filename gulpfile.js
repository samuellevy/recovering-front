"use strict";

var gulp = require("gulp");
var browserSync = require("browser-sync");
var sass = require("gulp-sass");
var clean = require("gulp-clean");
var del = require("del");
var pug = require("gulp-pug");

var src = "./app/";
var target = "./webroot/";

//compile
gulp.task("sass", function() {
  return gulp
    .src(src + "scss/*")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(target + "css/"))
    .pipe(
      browserSync.reload({
        // Reloading with Browser Sync
        stream: true
      })
    );
});

gulp.task("scripts", function() {
  return gulp
    .src(src + "js/*")
    .pipe(gulp.dest(target + "js/"))
    .pipe(
      browserSync.reload({
        // Reloading with Browser Sync
        stream: true
      })
    );
});

gulp.task("images", function() {
  return gulp
    .src(src + "images/*")
    .pipe(gulp.dest(target + "images/"))
    .pipe(
      browserSync.reload({
        // Reloading with Browser Sync
        stream: true
      })
    );
});

gulp.task("pages", function() {
  return gulp
    .src(src + "*.html")
    .pipe(gulp.dest(target))
    .pipe(
      browserSync.reload({
        // Reloading with Browser Sync
        stream: true
      })
    );
});

gulp.task("clean", function(cb) {
  // return del.sync([target+'/**/*', '!'+target+'/images', '!'+target+'/images/**/*', '!'+target+'index.php']);
  return del([target + "**/*", "!" + target + "/css/components"], cb);
});

gulp.task("watch", function() {
  browserSync.init({
    server: target
  });
  gulp.watch(src + "scss/**/*.scss", gulp.series("sass"));
  gulp.watch(src + "js/*.js", gulp.series("scripts"));
  gulp.watch(src + "images/*", gulp.series("images"));
  gulp.watch(src + "**/*.pug", gulp.series("views"));
  // gulp.watch(src + "**/*.html", gulp.series("pages"));
});

gulp.task("views", function buildHTML() {
  return gulp
    .src(src + "views/*.pug")
    .pipe(
      pug({
        // Your options in here.
        pretty: true
      })
    )
    .pipe(gulp.dest(target))
    .pipe(
      browserSync.reload({
        // Reloading with Browser Sync
        stream: true
      })
    );
});

//compile and watch
gulp.task(
  "dev",
  gulp.series("clean", gulp.parallel("sass", "scripts", "images", "views"), "watch"),
  function() {}
);

gulp.task(
  "build",
  gulp.series(gulp.parallel("clean", "sass", "scripts", "images", "views")),
  function() {}
);

// default function
gulp.task("default", function() {});
