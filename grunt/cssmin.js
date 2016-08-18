module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'www/',
      src: [ '**/*.css', '!*.min.css', '!lib/**'], // 1
      dest: 'www/',
      ext: '.min.css'
    }]
  }
};
