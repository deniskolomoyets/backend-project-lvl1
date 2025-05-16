import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly', // 👈 или можно только это
      },
    },
    plugins: {
      js,
      stylistic,
    },
    rules: {
      ...js.configs.recommended.rules,
      'stylistic/quotes': ['error', 'single'],
      'stylistic/semi': ['error', 'never'],
      'no-console': 'off',
    },
  },
])
