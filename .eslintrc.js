module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  globals: {
    shallow: true,
    render: true,
    mount: true,
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react/require-default-props": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "no-use-before-define": "off",
    " react/jsx-no-useless-fragment": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "react/jsx-props-no-spreading": "off",

    "no-cycle": "off",
    "import/extensions": [
      "off",
      "never",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
