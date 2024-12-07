import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaVersion: 2020 },
    },
  },
  ...compat.extends('airbnb'),
  {
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
      'no-console': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
      ],
    },
  },
];
