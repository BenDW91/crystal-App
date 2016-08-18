module.exports = {
  options: {
    sourceMap: false
  },
  dist: {
    files: {
      'www/app.min.js': ['src/app/app.js', 'src/app/app.**.js'],
      'www/home/home.min.js': ['www/home/*.js'],
      'www/about/about.min.js': ['www/about/*.js'],
      'www/concept/concept.min.js': ['www/concept/*.js'],
      'www/concepts/concepts.min.js': ['www/concepts/*.js'],
      'www/artists/artists.min.js': ['www/artists/*.js'],
      'www/components/nav-bar/nav-bar.min.js': ['www/components/nav-bar/*.js'],
      'www/components/header/header.min.js': ['www/components/header/header.service.js', 'www/components/header/*.js']
    }
  }
};
