module.exports = {
  "extends": "airbnb",
  "plugins": ["jsx-a11y", "import", "react"],
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [2, { "extensions": [".js"] }],
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "react/sort-comp": [
      2,
      {
        "order": ["static-methods", "lifecycle", "render", "everything-else"]
      }
    ],
    "jsx-a11y/href-no-hash": 0,
    "no-use-before-define": 0,
    "no-underscore-dangle": 0,
    "new-cap": 0,
    "max-len": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": [
      2,
      {
        "devDependencies": true,
        "optionalDependencies": false,
        "peerDependencies": false
      }
    ],
    "class-methods-use-this": 0,
    "no-param-reassign": 0,
    "no-confusing-arrow": 0,
    "arrow-body-style": ["error", "as-needed"],
    "no-bitwise": [2, { "int32Hint": true }],
    "no-unused-expressions": 0,
    "no-cond-assign": [2, "except-parens"],
    "global-require": 0,
    "no-extra-parens": [2, "functions"],
    "generator-star-spacing": 0,
    "no-constant-condition": ["error", { "checkLoops": false }],
    "no-multiple-empty-lines": [
      "error",
      { "max": 1, "maxBOF": 0, "maxEOF": 0 }
    ],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "no-restricted-properties": 0,
    "no-mixed-operators": 0,
    "comma-dangle": ["error", "never"]
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "globals": {
    "describe": true,
    "expect": true,
    "fetch": true,
    "jest": true,
    "it": true,
    "navigator": true,
    "beforeAll": true,
    "beforeEach": true,
    "afterAll": true,
    "afterEach": true,
    "test": true,
    "jasmine": true,
    "__DEV__": true
  }
}
