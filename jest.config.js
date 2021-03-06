// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    'src',
    'node_modules'
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '\\.vue$': 'vue-jest',
    '\\.jsx?$': 'babel-jest'
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    '/node_modules/'
  ]
}
