module.exports = {
  dist: {
    options: {
      htmlmin: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      },
      singleModule: true,
      existingModule: true,
      module: 'Crystal.Templates'
    },
    files: [
      {
        src: 'src/app/home/*.template.html',
        dest: 'www/home/home.template.js'
      },
      {
        src: 'src/app/about/*.template.html',
        dest: 'www/about/about.template.js'
      },
      {
        src: 'src/app/concepts/*.template.html',
        dest: 'www/concepts/concepts.template.js'
      },
      {
        src: 'src/app/concept/*.template.html',
        dest: 'www/concept/concept.template.js'
      },
      {
        src: 'src/app/artists/*.template.html',
        dest: 'www/artists/artists.template.js'
      },
      {
        src: 'src/app/components/nav-bar/*.template.html',
        dest: 'www/components/nav-bar/nav-bar.template.js'
      },
      {
        src: 'src/app/components/header/*.template.html',
        dest: 'www/components/header/header.template.js'
      }
    ]
  }

};
