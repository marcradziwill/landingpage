const CleanCSS = require('clean-css');

module.exports = function (eleventyConfig) {

  const cssmin = (code) => {
    return new CleanCSS({}).minify(code).styles;
  };
  

  eleventyConfig.addFilter('cssmin', cssmin);

  eleventyConfig.addWatchTarget('./src/assets');
  eleventyConfig.addPassthroughCopy('src/assets/images');


  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
