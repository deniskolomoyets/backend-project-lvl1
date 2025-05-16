import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import prettier from 'eslint-config-prettier' 

export default [
  // ...
  stylistic.configs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  // prettier,
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'arrow-parens': ['error', 'as-needed'],
      'no-extra-parens': 'off',
      '@typescript-eslint/no-extra-parens': 'off',
      'brace-style': ['error', 'stroustrup'],
    },
  },
]
