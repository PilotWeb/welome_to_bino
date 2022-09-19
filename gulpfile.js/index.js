global.$ = {
  //Пакеты
  gulp: require('gulp'),
  gp: require("gulp-load-plugins")(),
  browserSync : require("browser-sync").create(),
  
  // Конфигурация
  path: require("./config/path.js"),
  app: require("./config/app.js")
}

//Задачи

const requireDir = require("require-dir");
const task = requireDir("./task", { recurse: true })



//Наблюдение

const watcher = () => {
  //watch($.path.html.watch, task.html);
  $.gulp.watch($.path.pug.watch, task.pug);
  //watch($.path.css.watch, task.css);
  $.gulp.watch($.path.scss.watch, task.scss);
  $.gulp.watch($.path.js.watch, task.js);
  $.gulp.watch($.path.img.watch, task.img);
  $.gulp.watch($.path.font.watch, task.font);
}

const build = $.gulp.series(
  task.clear,
  //task.html,
  $.gulp.parallel(task.pug, task.scss, task.js, task.img, task.font) 
)

const dev = $.gulp.series(
  build,
  $.gulp.parallel(watcher, task.server)
)

//Задачи


exports.watch = task.watcher
exports.clear = task.clear
exports.pug = task.pug
//exports.html = task.html
//exports.css = task.css
exports.scss = task.scss
exports.js = task.js
exports.img = task.img
exports.font = task.font

// Сборка
exports.default = $.app.isProd
  ? build
  : dev;



