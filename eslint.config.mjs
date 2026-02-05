import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import {defineConfig} from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      'node_modules/',
      'babel.config.js',
      'metro.config.js',
      'jest.config.js',
      'react-native.config.js',
      '.eslintrc.js',
      '.prettierrc.js',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {js},
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-console': 'warn',
      'no-redeclare': 'warn',
      'no-unused-vars': 'warn',
      'no-shadow': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
]);
