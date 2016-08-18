module.exports = {
  dist: {
    options: {
      style: 'expanded',
      sourcemap: 'none'
    },
    files: [{
      expand: true, // 2
      cwd: 'src/app',
      src: [ '**/**/*.scss' ],
      dest: 'www/',
      ext: '.css'
    }]
  }
};
