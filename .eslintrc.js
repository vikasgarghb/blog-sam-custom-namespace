module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    project: "./tsconfig.json",
    sourceType: "module"
  },
  rules: {
    "@typescript-eslint/camelcase": ["error", { properties: "never" }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/interface-name-prefix": [
      "error",
      { prefixWithI: "never" }
    ],
    "@typesript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": ["error"],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  }
};
