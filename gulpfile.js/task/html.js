//Обработка HTML
const html = () => {
    return $.gulp.src($.path.html.src)
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
          title: "HTML",
          message: error.message
        }))
      }))
      .pipe($.gp.fileInclude()) 
      .pipe($.gp.webpHtml())
      .pipe($.gp.size())
      .pipe($.gp.htmlmin($.app.htmlmin))
      .pipe($.gp.size())   
      .pipe($.gulp.dest($.path.html.dest))
      .pipe($.browserSync.stream()) 
      
  }

  module.exports = html