module.exports = {
  env: {
    browser: true,
    jest: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "inport/extensions": "off",
    "no-new": "off",
  },
};
