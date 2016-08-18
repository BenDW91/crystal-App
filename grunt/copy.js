module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'src/app',
      src: ['**/**/**/*.js', '!app.js'],
      dest: 'www/',
      filter: 'isFile'
    }]
  },
  lib: {
    files: [{
      expand: true,
      cwd: 'src',
      src: ['lib/**', 'img/**', 'temp-data/**'],
      dest: 'www/',
      filter: 'isFile'
    }]
  }
};
