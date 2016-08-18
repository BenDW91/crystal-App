module.exports = {
  initialCleanup: ['www/**'],
  finalCleanup: [
    "www/**/**/*.css",
    "!www/**/**/*.min.css",
    "www/**/**/*.js",
    "!www/**/**/*.min.js"
  ]
};
