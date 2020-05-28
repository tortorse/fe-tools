module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    "parser": "babel-eslint"
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  plugins: [
    'vue'
  ]
}
