module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  parserOptions: {
    ecmaVersion: 'latest',
sourceType: 'module',
  },
  env: {
    es6: true,
  },
};
