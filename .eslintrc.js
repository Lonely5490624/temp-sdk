module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  }
}
