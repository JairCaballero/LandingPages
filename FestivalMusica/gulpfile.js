const { src , dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

//src <-- identifica archivo
//dest <-- almacena algo en una carpeta

function css ( callback ) {

   src('src/scss/**/*.scss') /*para que recarge en todo archivo de la carpeta scss los terminados en scss */
      .pipe( plumber() )
      .pipe( sass() ) //compila
      .pipe( dest("build/css") ) // guarda

   callback(); //avisa a gulp que se llego al final

}

function dev ( done ) {

   watch('src/scss/app.scss',css);

   done();

}

exports.css = css;
exports.dev = dev;
