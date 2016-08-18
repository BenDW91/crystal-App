module.exports = {
  dist: {
    src: 'src/index.html',
    dest: 'www/',
    options: {
      beautify: true,
      relative: true,
      scripts: {
        bundle: [
          'www/lib/ionic/js/ionic.bundle.js',
          'cordova.js',
          'www/app.min.js'
        ],
        main: [
          'www/**/**/*.js',
          '!www/lib/**',
          '!www/app.min.js'
        ]
      },
      styles: {
        bundle: [
          'www/lib/ionic/css/ionic.min.css'
        ],
        main: [
          'www/**/**/*.min.css',
          '!www/lib/ionic/css/ionic.min.css'
        ]
      }
    }
  }
};
