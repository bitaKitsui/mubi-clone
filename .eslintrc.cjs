module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'standard-with-typescript', 'prettier', 'plugin:storybook/recommended'],
  overrides: [{
    files: ['**/?(*.)+(spec|test).+(ts|tsx|js)', '*.stories.@(ts|tsx|js)'],
    extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react', 'plugin:storybook/recommended'],
  }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'react-hooks', 'jest-dom', 'testing-library'],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/strict-boolean-expressions": "off"
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['vitest.setup.ts', 'vite.config.ts']
};